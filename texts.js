module.exports = {
  ru: {
    helpText: `
    /cipher [string] - шифрует "string" и возвращает шифр с ключом.
/decipher [cipher] [key] - расшифровывает "cipher" и возвращает расшифрованную строку.
/hash [length] [string] - хэширует "string" и возвращает хэш.
/verify [hash] [testString] - сравнивает соответствует ли "testString" хешу "hash".
/help - помощь по командам бота.
/language [language] - изменить язык бота на "language".`,
    validationErrorText: (arg) => `"${arg}" — обязательный аргумент!`,
    cipherText: (cipher, key) => `
  шифр: ${cipher}
ключ: ${key}`,
    invalidInputError: (arg) => `Аргумент "${arg}" введен неверно!`,
    switchLanguage: (lang) => `Язык успешно изменен на "${lang}!"`,
  },
  eng: {
    validationErrorText: (arg) => `"${arg}" is a required argument!`,
    cipherText: (cipher, key) => `
  cipher: ${cipher}
key: ${key}`,
    invalidInputError: (arg) => `Argument "${arg}" is incorrectly entered!`,
    switchLanguage: (lang) => `Language successfully changed to "${lang}!"`,
    helpText: `
    /cipher [string] - encrypts "string" and returns the cipher with the key.
/decipher [cipher] [key] - decrypts "cipher" and returns the decrypted string.
/hash [length] [string] - hashes "string" and returns the hash.
/verify [hash] [testString] - compares whether "testString" matches hash "hash".
/help - help with bot commands.
/language [language] - change bot language to "language".`,
  },
};
