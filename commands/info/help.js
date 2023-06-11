const {
  ActionRowBuilder,
  StringSelectMenuBuilder,
  EmbedBuilder,
} = require('discord.js');
const Command = require('../../structures/Command');

module.exports = new Command({
  name: 'help',
  description: 'help on command',
  run: async ({ interaction }) => {
    const row = new ActionRowBuilder();
    const basicSelectMenu = new StringSelectMenuBuilder()
      .setCustomId('basicSelectMenu')
      .setPlaceholder('help')
      .addOptions(
        {
          label: 'First',
          description: 'First option',
          value: 'first_option',
        },
        {
          label: 'Second',
          description: 'Second option',
          value: 'second_option',
        }
      );
    row.addComponents(basicSelectMenu);
    const menuEmbed = new EmbedBuilder()
      .setColor(0x000000)
      .setDescription('test');

    return interaction.followUp({
      embeds: [menuEmbed],
      components: [row],
    });
  },
});
