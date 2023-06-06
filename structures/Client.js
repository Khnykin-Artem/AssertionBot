const { Client, Collection } = require('discord.js');
const { readdirSync } = require('node:fs');

module.exports = class ExtendedClient extends Client {
  commands = new Collection();

  constructor() {
    super({ intents: 32767 });
  }

  start() {
    this.registerModules();
    this.login(process.env.TOKEN);
  }

  async registerCommands({ commands, guildId }) {
    if (guildId) {
      this.guilds.cache.get(guildId)?.commands.set(commands);
      console.log(`Registering commands to ${guildId}`);
    } else {
      this.application?.commands.set(commands);
      console.log('Registering global commands');
    }
  }

  async registerModules() {
    // Commands
    const slashCommands = [];
    const commandFiles = readdirSync('./commands');
    commandFiles.forEach(async (filePath) => {
      const command = require(`../commands/${filePath}`);
      if (!command.name) return;
      console.log(command);

      this.commands.set(command.name, command);
      slashCommands.push(command);
    });

    this.on('ready', () => {
      this.registerCommands({
        commands: slashCommands,
        guildId: process.env.GUILD_ID,
      });
    });

    // Event
    const eventFiles = readdirSync('./events');
    eventFiles.forEach(async (filePath) => {
      const event = require(`../events/${filePath}`);
      this.on(event.event, event.run);
    });
  }
};
