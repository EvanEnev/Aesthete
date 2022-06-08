const mongoose = require('mongoose')

const model = mongoose.Schema({
  id: String,
  guildID: String,
  about: String,
  marriage: String,
})

module.exports = mongoose.model('Members', model)
