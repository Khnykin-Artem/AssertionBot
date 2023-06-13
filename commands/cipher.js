const encrypt = require('../lib/encrypt');
const { validationErrorText, cipherText } = require('../texts');

module.exports = {
  name: 'cipher',
  handler: async (ctx) => {
    try {
      const args = ctx.message.text.split(' ').slice(1);
      const string = args[0];

      if (!string) {
        return ctx.reply(validationErrorText('string'));
      }

      const [cipher, key] = encrypt(string);
      return ctx.reply(cipherText(cipher, key));
    } catch (e) {
      return console.log(e);
    }
  },
};
