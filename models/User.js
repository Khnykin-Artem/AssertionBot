const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String,
    trim: true,
    unique: true,
  },
  cash: {
    required: true,
    type: Number,
    trim: true,
  },
  bank: {
    required: true,
    type: Number,
    trim: true,
  },
  total: {
    required: true,
    type: Number,
    trim: true,
  },
  experience: {
    required: true,
    type: Number,
    trim: true,
  },
  work: {
    required: true,
    type: String,
    trim: true,
  },
  premium: {
    required: true,
    type: Boolean,
    trim: true,
  },
  password: {
    required: true,
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
