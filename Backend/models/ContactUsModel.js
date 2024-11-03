const mongoose = require('mongoose');

const ContactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: { 
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('ContactUsModel', ContactUsSchema);
