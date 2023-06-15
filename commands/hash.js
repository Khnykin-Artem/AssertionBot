const hashing = require('../lib/hashing');
const texts = require('../texts');

module.exports = {
  name: 'hash',
  handler: async (ctx) => {
    try {
      const [length, ...string] = ctx.message.text.split(' ').slice(1);

      const { language } = ctx.sessionDB
        .get('users')
        .value()
        .find(({ id }) => id === ctx.message.from.id);

      if (!string) {
        return ctx.reply(texts[language].validationErrorText('string'));
      }
      if (!length) {
        return ctx.reply(texts[language].validationErrorText('length'));
      }

      const hash = await hashing(string.join(' '), length);
      return ctx.reply(hash);
    } catch (e) {
      return console.log(e);
    }
  },
};
