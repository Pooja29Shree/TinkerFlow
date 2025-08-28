// models/Leveldata.js

const mongoose = require('mongoose');

const leveldataSchema = new mongoose.Schema({
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
  }
});

leveldataSchema.index({ username: 1, subject: 1 }, { unique: true });

module.exports = mongoose.model('Leveldata', leveldataSchema);
