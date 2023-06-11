const { validationErrorText, banText } = require('../../texts');

module.exports = {
  name: 'ban',
  handler: async (ctx) => {
    try {
      const args = ctx.message.text.split(' ').slice(1);
      const userId = args[0];

      if (!userId) {
        return ctx.reply(validationErrorText('userId'));
      }
      console.log(ctx.users);
      ctx.users.delete(userId);
      console.log(ctx.users);
      return ctx.reply(banText(userId));
    } catch (e) {
      return console.log(e);
    }
  },
};
