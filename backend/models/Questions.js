// models/Questions.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: Number,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
  },
  correctAnswer: {
    type: Number,
    required: true,
  },
  explanation: {
    type: String,
  }
});

module.exports = mongoose.model('Question', questionSchema);
