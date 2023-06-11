const { validationErrorText, registrationText } = require('../../texts');

module.exports = {
  name: 'registration',
  handler: async (ctx) => {
    try {
      const args = ctx.message.text.split(' ').slice(1);

      const userId = ctx.message.from.id;
      const password = args[0];

      if (!password) {
        return ctx.reply(validationErrorText('password'));
      }

      ctx.users.set(userId, {
        password,
        cash: 0,
        bank: 0,
        get total() {
          return this.cash + this.bank;
        },
        experience: 0,
        work: '',
        premium: false,
      });

      return ctx.reply(registrationText(userId));
    } catch (e) {
      return console.log(e);
    }
  },
};
