const decrypt = require('../lib/decrypt');
const { validationErrorText } = require('../texts');

module.exports = {
  name: 'decipher',
  handler: async (ctx) => {
    try {
      const args = ctx.message.text.split(' ').slice(1);
      const [cipher, key, algorithm] = args;

      if (!cipher) {
        return ctx.reply(validationErrorText('cipher'));
      }
      if (!key) {
        return ctx.reply(validationErrorText('key'));
      }

      return ctx.reply(decrypt(cipher, key, algorithm ?? 'aes256'));
    } catch (e) {
      return console.log(e);
    }
  },
};
