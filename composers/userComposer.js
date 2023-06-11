const { Composer } = require('telegraf');
const fs = require('node:fs');
const path = require('node:path');

const userComposer = new Composer();
const commandFiles = fs.readdirSync('./commands/user');

commandFiles.forEach((filePath) => {
  const command = require(path.resolve('commands', 'user', filePath));
  userComposer.command(command.name, command.handler);
});

module.exports = userComposer;
