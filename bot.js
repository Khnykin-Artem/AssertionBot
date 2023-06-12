const { Telegraf } = require('telegraf');
require('dotenv').config();
const userComposer = require('./composers/userComposer');
const adminComposer = require('./composers/adminComposer');

const token = process.env.TOKEN;
const bot = new Telegraf(token);

bot.use(userComposer);
bot.use(adminComposer);

bot.launch();
console.log('bot launched');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
