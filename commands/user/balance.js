const { balanceText } = require('../../texts');

module.exports = {
  name: 'balance',
  handler: async (ctx) => {
    try {
      const userId = ctx.message.from.id;
      const userName = ctx.message.from.username;
      console.log(ctx.users);
      const { cash, bank, total } = ctx.users.get(userId);

      return ctx.replyWithHTML(balanceText(userName, cash, bank, total));
    } catch (e) {
      return console.log(e);
    }
  },
};
