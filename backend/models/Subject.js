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
    type: [String],
    required: true,
  },
  pdfLink: {
    type: String,
  },
  videoUrl: {
    type: String,
  }
});

subjectSchema.index({ subject: 1, level: 1 }, { unique: true });

module.exports = mongoose.model('Subject', subjectSchema);
