module.exports = (guild = { id: '!', name: '!' }) => ({
  id: guild.id,
  name: guild.name,
  members: {}, // Удалять запрещаю!
  prefix: '!', // Префикс по умолчанию.
});
