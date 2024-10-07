const mongoose = require('mongoose');

// Define the Image Schema
const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    default: 'Image'
  },
});

// Create the Image Model from the Schema
const SliderImage = mongoose.model('SliderImage', imageSchema);

module.exports = SliderImage;
