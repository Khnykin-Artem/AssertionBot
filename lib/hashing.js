const crypto = require('node:crypto');
const { promisify } = require('node:util');

async function hashing(string, length, salt) {
  const saltInUse = salt ?? crypto.randomBytes(16).toString('hex');
  const hashBuffer = await promisify(crypto.scrypt)(
    string,
    saltInUse,
    length / 2
  );
  const hash = hashBuffer.toString('hex');
  return `${hash}:${saltInUse}`;
}

module.exports = hashing;
