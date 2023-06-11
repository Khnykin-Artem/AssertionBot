const { Composer } = require('telegraf');
const fs = require('node:fs');
const path = require('node:path');

const adminComposer = new Composer();
const commandFiles = fs.readdirSync('./commands/admin');

commandFiles.forEach((filePath) => {
  const command = require(path.resolve('commands', 'admin', filePath));
  adminComposer.command(command.name, command.handler);
});

module.exports = adminComposer;
