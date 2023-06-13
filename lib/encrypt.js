const crypto = require('node:crypto');
const createKey = require('./createKey');

function encrypt(string) {
  const key = createKey();
  const iv = crypto.randomBytes(8).toString('hex');
  const cipher = crypto.createCipheriv('aes256', key, iv);

  let encrypted = cipher.update(string, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return [`${encrypted}:${iv}`, key];
}

module.exports = encrypt;
