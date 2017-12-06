const mongoose = require('mongoose');

var Path = mongoose.model('Path', {
  originalUrl: {
    type: String,
    required: true,
    minlength: 1
  },
  shortCode: {
    type: String,
    required: true
  }
});

module.exports = {Path};
