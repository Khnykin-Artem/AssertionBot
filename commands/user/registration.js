const { validationErrorText, registrationText } = require('../../texts');

module.exports = {
  name: 'registration',
  handler: async (ctx) => {
    try {
      const args = ctx.message.text.split(' ').slice(1);

      const userId = ctx.message.from.id;
      const password = args[0];

      if (!password) {
        ctx.reply(validationErrorText('password'));
      }

      ctx.users = {
        userId,
        password,
      };

      return ctx.reply(registrationText(userId));
    } catch (e) {
      return console.log(e);
    }
  },
};
