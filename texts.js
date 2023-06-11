module.exports = {
  validationErrorText: (field) => `"${field}" is a required field!`,
  registrationText: (userId) =>
    `User (userId: ${userId}) successfully registered!`,
  banText: (userId) => `User (userId: ${userId}) has been banned successfully!`,
  balanceText: (userName, cash, bank, total) => `
  ${userName}<\\br>
  cash: ${cash}<\\br>
  bank: ${bank}<\\br>
  total: ${total}`,
};
