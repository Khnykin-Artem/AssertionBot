const { balanceText } = require('../../texts');
const userService = require('../../services/userService');

module.exports = {
  name: 'balance',
  handler: async (ctx) => {
    try {
      const userId = ctx.message.from.id;
      const userName = ctx.message.from.username;
      const { cash, bank, total } = await userService.getBalance(userId);
      return ctx.reply(balanceText(userName, cash, bank, total));
    } catch (e) {
      return console.log(e);
    }
  },
};
