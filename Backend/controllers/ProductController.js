const Product = require('../models/ProductModel');
const cloudinary = require('../Utils/cloudinaryConfig');

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const { title, price, offeredPrice, description } = req.body;

    // Handle multiple image uploads
    const images = req.files.map(file => ({
      imageUrl: file.path,
      cloudinary_id: file.filename,
    }));

    const newProduct = new Product({
      title,
      price,
      offeredPrice,
      description,
      images,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product', details: error.message });
  }
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products', details: error.message });
  }
};

// Get Single Product
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product', details: error.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const { title, price, offeredPrice, description } = req.body;

    let updatedImages = [];
    if (req.files && req.files.length > 0) {
      updatedImages = req.files.map(file => ({
        imageUrl: file.path,
        cloudinary_id: file.filename,
      }));
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        title,
        price,
        offeredPrice,
        description,
        ...(updatedImages.length && { images: updatedImages }),
      },
      { new: true }
    );

    if (!updatedProduct) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product', details: error.message });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    // Delete images from Cloudinary
    for (const img of product.images) {
      await cloudinary.uploader.destroy(img.cloudinary_id);
    }

    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product', details: error.message });
  }
};
