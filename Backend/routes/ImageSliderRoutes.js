const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../Utils/cloudinaryConfig');
const imageController = require('../controllers/ImageSliderController');

// Configure multer for image upload to Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'slider_images',
    format: async (req, file) => 'png',
    public_id: (req, file) => file.originalname,
  },
});

const upload = multer({ storage });

// Routes
router.get('/', imageController.getImages);
router.post('/', upload.single('image'), imageController.uploadImage);
router.delete('/:id', imageController.deleteImage); 

module.exports = router;
