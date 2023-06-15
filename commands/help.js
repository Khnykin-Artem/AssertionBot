const texts = require('../texts');

module.exports = {
  name: 'help',
  handler: async (ctx) => {
    try {
      const { language } = ctx.sessionDB
        .get('users')
        .value()
        .find(({ id }) => id === ctx.message.from.id);
      return ctx.reply(texts[language].helpText);
    } catch (e) {
      return console.log(e);
    }
  },
};
