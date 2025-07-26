const mongoose = require('mongoose');

const submissiondata = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  level: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true,
  },
  submittedOn: {
    type: Date,
    default: Date.now,
  },
  feedback:{
    type: String,
    required: true,
    trim: true
  },
  answers: [
    {
      questionId: String,    
      selectedOption: String,
      correctOption: String,
    }
  ],
  attemps:{
    type: Number,
    required:true
  }
});

leveldataSchema.index({ username: 1, subject: 1, level: 1 }, { unique: true });

module.exports = mongoose.model('Submissiondata', submissiondata);
