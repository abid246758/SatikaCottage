const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../Utils/cloudinaryConfig');
const catagoryImages=require('../controllers/CatagoryImagesController')

// Configure multer for image upload to Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'catagory_images',
    format: async (req, file) => 'png',
    public_id: (req, file) => file.originalname,
  },
});

const upload = multer({ storage });

// Routes
router.get('/', catagoryImages.getImages);
router.post('/', upload.single('image'), catagoryImages.uploadImage);
router.delete('/:id', catagoryImages.deleteImage); 




module.exports = router;
