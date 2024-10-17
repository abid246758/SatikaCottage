const SliderImage = require('../models/SliderImagesModel');
const cloudinary = require('../Utils/cloudinaryConfig');

// Upload a slider image
exports.uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'slider_images',
    });

    const newImage = new SliderImage({
      name: req.file.originalname,
      imageUrl: result.secure_url,
      cloudinary_id: result.public_id,
    });

    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload image', details: err.message });
  }
};


// Get all slider images
exports.getImages = async (req, res) => {
  try {
    const images = await SliderImage.find();
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch images', details: err.message });
  }
};



// Delete a slider image
exports.deleteImage = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the image in MongoDB
    const image = await SliderImage.findById(id);
    if (!image) return res.status(404).json({ message: 'Image not found' });

    // Extract the public ID from the image URL
    const publicId = image.imageUrl.split('/').pop().split('.')[0];

    // Delete from Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.destroy(`slider_images/${publicId}`);

    // Check if the image was successfully deleted from Cloudinary
    if (cloudinaryResponse.result === 'not found') {
      return res.status(404).json({ message: 'Image not found on Cloudinary' });
    }

    // Delete the image from MongoDB
    await SliderImage.findByIdAndDelete(id);
    
    res.status(200).json({ message: 'Image deleted successfully from both Cloudinary and MongoDB' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting image', error });
  }
};
