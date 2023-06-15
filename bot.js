const { Telegraf } = require('telegraf');
require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const LocalSession = require('telegraf-session-local');

const token = process.env.TOKEN;
const bot = new Telegraf(token);

bot.use(
  new LocalSession({
    database: 'db.json',
    property: 'session',
    storage: LocalSession.storageFileAsync,
    format: {
      serialize: (obj) => JSON.stringify(obj, null, 2), // null & 2 for pretty-formatted JSON
      deserialize: (str) => JSON.parse(str),
    },
    state: { users: [] },
  }).middleware()
);

bot.on('text', (ctx, next) => {
  if (
    ctx.sessionDB
      .get('users')
      .value()
      .some(({ id }) => id === ctx.message.from.id)
  )
    return next();
  ctx.sessionDB
    .get('users')
    .push({ ...ctx.message.from, language: 'eng' })
    .write();
  return next();
});

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
