const { Client, Collection } = require('discord.js');
const { glob } = require('glob');
// const path = require('node:path');

module.exports = class ExtendedClient extends Client {
  commands = new Collection();

  constructor() {
    super({ intents: 32767 });
  }

  start() {
    this.registerModules();
    this.login(process.env.TOKEN);
  }

  async importFile(filePath) {
    return await import(filePath);
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
    const commandFiles = await glob('../commands/**/*.js');
    commandFiles.forEach(async (filePath) => {
      const command = await this.importFile(filePath);
      if (!command.name) return;
      console.log(command);

      this.commands.set(command.name, command);
      slashCommands.push(command);
    });

    this.on('ready', () => {
      this.registerCommands({
        commands: slashCommands,
        guildId: process.env.guildId,
      });
    });

    // Event
    const eventFiles = await glob('../events/*.js');
    eventFiles.forEach(async (filePath) => {
      const event = await this.importFile(filePath);
      this.on(event.event, event.run);
    });
  }
};
