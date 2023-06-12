const crypto = require('node:crypto');

function createKey() {
  const key = crypto.randomBytes(16).toString('hex');
  const algorithm = 'aes256';
  return {
    key,
    algorithm,
  };
}

module.exports = createKey;
