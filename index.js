require('dotenv').config();
const ExtendedClient = require('./structures/Client');

const client = new ExtendedClient();
client.start();

module.exports = client;
