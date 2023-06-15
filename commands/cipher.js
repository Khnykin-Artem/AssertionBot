const encrypt = require('../lib/encrypt');
const texts = require('../texts');

module.exports = {
  name: 'cipher',
  handler: async (ctx) => {
    try {
      const args = ctx.message.text.split(' ').slice(1);
      const string = args.join(' ');

      const { language } = ctx.sessionDB
        .get('users')
        .value()
        .find(({ id }) => id === ctx.message.from.id);

      if (!string) {
        return ctx.reply(texts[language].validationErrorText('string'));
      }

      const [cipher, key] = encrypt(string);
      return ctx.reply(texts[language].cipherText(cipher, key));
    } catch (e) {
      return console.log(e);
    }
  },
};
