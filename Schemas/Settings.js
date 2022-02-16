const mongoose = require('mongoose');

const model = mongoose.Schema({
  _id: String,
  rolePlayChannelID: String,
  locale: String,
});

module.exports = mongoose.model('Settings', model);
