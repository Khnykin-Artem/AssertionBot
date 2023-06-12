const User = require('../models/User');

class UserService {
  async create(user) {
    return await User.create(user);
  }

  async getOne(userId) {
    return await User.findOne({ userId });
  }

  async getAll() {
    return await User.find();
  }

  async getBalance(userId) {
    const { cash, bank, total } = await this.getOne(userId);
    return { cash, bank, total };
  }

  async update(userId, user) {
    return await User.findOneAndUpdate({ userId }, user, { new: true });
  }

  async delete(userId) {
    return await User.findOneAndDelete({ userId });
  }
}

module.exports = new UserService();
