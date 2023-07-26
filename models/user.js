// src/models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  imageUrl: { type: String },
  location: { type: String, required: true },
  billingInformation: { type: String },
  purchaseHistory: { type: String },
  password: { type: String, required: true },
});


module.exports = mongoose.model('User', userSchema);
