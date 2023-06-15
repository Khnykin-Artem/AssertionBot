const texts = require('../texts');

module.exports = {
  name: 'language',
  handler: async (ctx) => {
    try {
      const args = ctx.message.text.split(' ').slice(1);
      const userLanguage = args[0];

      const { language } = ctx.sessionDB
        .get('users')
        .value()
        .find(({ id }) => id === ctx.message.from.id);

      if (userLanguage !== 'ru' && userLanguage !== 'eng') {
        return ctx.reply(texts[language].invalidInputError('language'));
      }

      ctx.sessionDB
        .get('users')
        .value()
        .find(({ id }) => id === ctx.message.from.id).language = userLanguage;

      return ctx.reply(texts[language].switchLanguage(userLanguage));
    } catch (e) {
      return console.log(e);
    }
  },
};
