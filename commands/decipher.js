const decrypt = require('../lib/decrypt');
const texts = require('../texts');

module.exports = {
  name: 'decipher',
  handler: async (ctx) => {
    try {
      const args = ctx.message.text.split(' ').slice(1);
      const [cipher, key, algorithm] = args;

      const { language } = ctx.sessionDB
        .get('users')
        .value()
        .find(({ id }) => id === ctx.message.from.id);

      if (!cipher) {
        return ctx.reply(texts[language].validationErrorText('cipher'));
      }
      if (!key) {
        return ctx.reply(texts[language].validationErrorText('key'));
      }

      return ctx.reply(decrypt(cipher, key, algorithm ?? 'aes256'));
    } catch (e) {
      return console.log(e);
    }
  },
};
