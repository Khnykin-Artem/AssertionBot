module.exports = (bot) => {
  require('./interactionHandler')(bot);
  require('./messageHandler')(bot);
};
