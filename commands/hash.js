const hashing = require('../lib/hashing');
const { validationErrorText } = require('../texts');

module.exports = {
  name: 'hash',
  handler: async (ctx) => {
    try {
      const [length, ...string] = ctx.message.text.split(' ').slice(1);

      if (!string) {
        return ctx.reply(validationErrorText('string'));
      }
      if (!length) {
        return ctx.reply(validationErrorText('length'));
      }

      const hash = await hashing(string.join(' '), length);
      return ctx.reply(hash);
    } catch (e) {
      return console.log(e);
    }
  },
};
