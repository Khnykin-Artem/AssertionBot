const crypto = require('node:crypto');

function createKey() {
  return crypto.randomBytes(16).toString('hex');
}

module.exports = createKey;
