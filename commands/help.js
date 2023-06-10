const Command = require('../structures/Command');

module.exports = new Command({
  name: 'help',
  description: 'help for commands',
  run: () => {},
});
