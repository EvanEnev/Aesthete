const mongoose = require('mongoose');

const model = mongoose.Schema({
  _id: String,
  rolePlayChannelID: String,
  weddingsChannelID: String,
  locale: String,
  dmMember: Boolean,
});

module.exports = mongoose.model('Settings', model);
