const { validationErrorText, registrationText } = require('../../texts');
const userService = require('../../services/userService');

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

      await userService.create({
        userId,
        password,
        cash: 0,
        bank: 0,
        total: 0,
        experience: 0,
        work: 'janitor',
        premium: false,
      });

      return ctx.reply(registrationText(userId));
    } catch (e) {
      return console.log(e);
    }
  },
};
