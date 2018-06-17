const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Games = new Schema({
  name: String,
  disciption: String
})

module.exports = mongoose.model('Games', Games)
