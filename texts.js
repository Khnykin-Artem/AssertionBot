module.exports = {
  validationErrorText: (arg) => `"${arg}" is a required argument!`,
  cipherText: (cipher, key) => `
  cipher: ${cipher}
key: ${key}`,
  helpText: `/cipher [string] - шифрует "string" и возвращает шифр с ключом.
/decipher [cipher] [key] - расшифровывает "cipher" и возвращает расшифрованную строку.
/hash [length] [string] - хэширует "string" и возвращает хэш.
/verify [hash] [testString] - сравнивает соответствует ли "testString" хешу [hash].
/help - помощь по командам бота.`,
};

/*
/cipher [string] - encrypts "string" and returns the cipher with the key.
/decipher [cipher] [key] - decrypts "cipher" and returns the decrypted string.
/hash [length] [string] - hashes "string" and returns the hash.
/verify [testString] [hash] - compares whether "testString" matches hash [hash].
/help - help with bot commands.
*/
