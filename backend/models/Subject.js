// models/Subject.js
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: Number,
    required: true,
  },
  content: {
    type: [String], // array of paragraphs
    required: true,
  },
  pdfLink: {
    type: String,
  },
  videoUrl: {
    type: String,
  }
});

module.exports = mongoose.model('Subject', subjectSchema);
