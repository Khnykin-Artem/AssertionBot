const crypto = require('node:crypto');

function decrypt(string, key, algorithm = 'aes256') {
  const [encryptedString, iv] = string.split(':');
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(encryptedString, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

module.exports = decrypt;
