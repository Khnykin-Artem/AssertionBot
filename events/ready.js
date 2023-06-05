const Event = require('../structures/Event');

module.exports = new Event('ready', () => {
  console.log('Bot is online');
});
