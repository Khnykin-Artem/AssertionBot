const { helpText } = require('../texts');

module.exports = {
  name: 'help',
  handler: async (ctx) => {
    try {
      return ctx.reply(helpText);
    } catch (e) {
      return console.log(e);
    }
  },
};
