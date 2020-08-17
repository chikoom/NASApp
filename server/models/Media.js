const mongoose = require('mongoose')

const Schema = mongoose.Schema
const mediaSchema = new Schema({
  title: String,
  imageURL: String,
  videoURL: String,
  description: String,
  media_type: String,
  isSaved: { type: Boolean, default: true },
})
const Media = mongoose.model('Media', mediaSchema)

module.exports = Media
