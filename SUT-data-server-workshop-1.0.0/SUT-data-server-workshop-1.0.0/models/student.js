const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Student = new Schema({
  name: String,
  score: Number
})
module.exports = mongoose.model('Student', Student)
