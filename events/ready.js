module.exports = async (bot) => {
  console.log('Bot is started!');

  const commandsIT = bot.application.commands;
  await commandsIT.fetch(); // Найти все команды

  bot.commands.any.forEach(async (command) => {
    if (command.interaction) {
      // Если слэш команда есть
      const interaction = await commandsIT.cache.find(
        (com) => com.name === command.interaction.name
      ); // Найти команду в боте по названию
      if (!interaction) {
        // Если команда не была найдена в боте
        commandsIT.create(command.interaction); // Создать команду
      } // Если команда есть
      else if (
        JSON.stringify(interaction.options) !==
        JSON.stringify(command.interaction.options)
      ) {
        // И параметры команды не совпадают (т.е. команда была изменена)
        interaction.edit(command.interaction); // Редактируем эту команду
      }
    }
  });

  commandsIT.cache.forEach((interaction) => {
    const command = bot.commands.any.find((el) =>
      el.names.includes(interaction.name)
    );
    if (!command && interaction.delete) interaction.delete(); // Если команды нет и есть возможность - удалить слэш команду
  });
};
