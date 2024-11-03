const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  catagory: {
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

module.exports = mongoose.model('CategoryModel', CategorySchema);
