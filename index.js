require('dotenv').config();
const { Telegraf, session } = require('telegraf');
const userComposer = require('./composers/userComposer');
const adminComposer = require('./composers/adminComposer');

const token = process.env.BOT_TOKEN;
const bot = new Telegraf(token);
const users = new Map();

bot.use(userComposer);
bot.use(adminComposer);
bot.use(session());
bot.context.users = users;

bot.launch();
console.log('bot launched');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
