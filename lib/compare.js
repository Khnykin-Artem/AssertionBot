const hashing = require('./hashing');

async function compare(testString, hashAndSalt) {
  const [hash, salt] = hashAndSalt.split(':');
  return (await hashing(testString, hash.length, salt)) === hashAndSalt;
}

module.exports = compare;
