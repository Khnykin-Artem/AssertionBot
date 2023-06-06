const Command = require('../structures/Command');

module.exports = new Command({
  name: 'ping',
  description: 'replies with pong',
  run: async ({ interaction }) => {
    interaction.followUp('Pong');
  },
});
