const mongoose = require('mongoose');
const config = require('config');

const mongodbConnect = async () => {
  const host = config.get('db.mongodb.host');
  const port = config.get('db.mongodb.port');
  const name = config.get('db.mongodb.name');
  const settings = config.get('db.mongodb.settings');

  mongoose
    .connect(`mongodb://${host}:${port}/${name}`, settings)
    .then(() => console.log('Successfully connected to mongodb!'))
    .catch((err) => {
      console.log(`Error connecting to mongodb: ${err}`);
    });
};

module.exports = {
  mongodbConnect,
};
