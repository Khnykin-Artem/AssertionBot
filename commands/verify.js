const texts = require('../texts');
const compare = require('../lib/compare');

module.exports = {
  name: 'verify',
  handler: async (ctx) => {
    try {
      const [hash, ...testString] = ctx.message.text.split(' ').slice(1);

      const { language } = ctx.sessionDB
        .get('users')
        .value()
        .find(({ id }) => id === ctx.message.from.id);

      if (!testString) {
        return ctx.reply(texts[language].validationErrorText('testString'));
      }
      if (!hash) {
        return ctx.reply(texts[language].validationErrorText('hash'));
      }

      const comparisonResult = await compare(testString.join(' '), hash);
      return ctx.reply(String(comparisonResult));
    } catch (e) {
      return console.log(e);
    }
  },
};
