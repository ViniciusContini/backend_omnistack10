const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const devSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String], // Para passar um vetor em node basta colcar o [] e o tipo que vai ser dentro dela, por exemplo [String]
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
})

module.exports = mongoose.model('Dev', devSchema)
