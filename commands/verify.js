const { validationErrorText } = require('../texts');
const compare = require('../lib/compare');

module.exports = {
  name: 'verify',
  handler: async (ctx) => {
    try {
      const [hash, ...testString] = ctx.message.text.split(' ').slice(1);

      if (!testString) {
        return ctx.reply(validationErrorText('testString'));
      }
      if (!hash) {
        return ctx.reply(validationErrorText('hash'));
      }

      const comparisonResult = await compare(testString.join(' '), hash);
      return ctx.reply(String(comparisonResult));
    } catch (e) {
      return console.log(e);
    }
  },
};
