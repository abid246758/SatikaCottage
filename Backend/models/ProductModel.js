const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  offeredPrice: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      imageUrl: String,
      cloudinary_id: String,
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model('ProductModel', ProductSchema);
