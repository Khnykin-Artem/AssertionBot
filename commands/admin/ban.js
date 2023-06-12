const { validationErrorText, banText } = require('../../texts');
const userService = require('../../services/userService');

module.exports = {
  name: 'ban',
  handler: async (ctx) => {
    try {
      const args = ctx.message.text.split(' ').slice(1);
      const userId = args[0];

      if (!userId) {
        return ctx.reply(validationErrorText('userId'));
      }
      await userService.delete(userId);
      return ctx.reply(banText(userId));
    } catch (e) {
      return console.log(e);
    }
  },
};
