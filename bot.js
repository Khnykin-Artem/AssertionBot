const { Telegraf } = require('telegraf');
require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');

const token = process.env.TOKEN;
const bot = new Telegraf(token);

const commandFiles = fs.readdirSync('./commands/');
commandFiles.forEach((filePath) => {
  const command = require(path.resolve('commands', filePath));
  console.log(command);
  bot.command(command.name, command.handler);
});

bot.launch();
console.log('bot launched');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
