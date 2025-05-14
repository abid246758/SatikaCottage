const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../Utils/cloudinaryConfig');
const productController = require('../controllers/ProductController');

// Configure Multer for multiple image uploads
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'product_images',
    format: async (req, file) => 'png',
    public_id: (req, file) => file.originalname,
  },
});

const upload = multer({ storage });

// CRUD Routes
router.post('/', upload.array('images', 5), productController.createProduct); // Create
router.get('/', productController.getAllProducts); // Read All
router.get('/:id', productController.getProductById); // Read Single
router.put('/:id', upload.array('images', 5), productController.updateProduct); // Update
router.delete('/:id', productController.deleteProduct); // Delete

module.exports = router;
