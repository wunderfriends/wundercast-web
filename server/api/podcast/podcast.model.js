'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PodcastSchema = new Schema({
  titulo: String,
  descricao: String,
  dataInclusao: Date
})

module.exports = mongoose.model('Podcast', PodcastSchema)
