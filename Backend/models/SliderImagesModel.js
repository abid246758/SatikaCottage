const mongoose = require('mongoose');

const SliderImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  cloudinary_id: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('SliderImage', SliderImageSchema);
