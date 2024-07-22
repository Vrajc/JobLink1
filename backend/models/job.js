const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  requirements: {
    type: [String],
    required: false,
  },
  salary: {
    type: String,
    required: false,
    trim: true
  },
  jobType: {
    type: String,
    enum: ['Full-Time', 'Part-Time', 'Contract', 'Internship'],
    required: false
  },
  datePosted: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Job', jobSchema);
