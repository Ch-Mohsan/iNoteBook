
const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {             
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('note', NoteSchema)
