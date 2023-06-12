module.exports = {
  validationErrorText: (arg) => `"${arg}" is a required argument!`,
  cipherText: (cipher, key, algorithm) => `
  cipher: ${cipher}
key: ${key}
algorithm: ${algorithm}`,
};
