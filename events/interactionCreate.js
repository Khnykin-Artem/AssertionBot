const client = require('../index');
const Event = require('../structures/Event');

module.exports = new Event('interactionCreate', async (interaction) => {
  // Chat Input Commands
  if (interaction.isCommand()) {
    await interaction.deferReply();
    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.followUp('You have used a non existent command');

    command.run({
      args: interaction.options,
      client,
      interaction,
    });
  }
  return null;
});
