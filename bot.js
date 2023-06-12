const { Telegraf } = require('telegraf');
const config = require('config');
const userComposer = require('./composers/userComposer');
const adminComposer = require('./composers/adminComposer');
const { mongodbConnect } = require('./db/mongodb');

async function startBot() {
  try {
    await mongodbConnect();

    const token = config.get('bot.token');
    const bot = new Telegraf(token);

    bot.use(userComposer);
    bot.use(adminComposer);

    bot.launch();
    console.log('bot launched');

    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
  } catch (e) {
    console.log(e);
  }
}

startBot();