const SliderImage = require('../models/SliderImagesModel');
const cloudinary = require('../Utils/cloudinaryConfig');


// Upload a slider image
exports.uploadImage = async (req, res) => {
  try {
    // Directly use req.file provided by multer-storage-cloudinary
    const newImage = new SliderImage({
      name: req.file.originalname,
      imageUrl: req.file.path,           
      cloudinary_id: req.file.filename,   
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



// delete image 
exports.deleteImage = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the image in MongoDB
    const image = await SliderImage.findById(id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found in database' });
    }

    // Use cloudinary_id directly
    const publicId = image.cloudinary_id; // Assuming this is stored as 'slider_images/image_name'
    console.log("Attempting to delete from Cloudinary with public ID:", publicId);

    // Delete from Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.destroy(publicId); // Remove folder if not included in cloudinary_id

    // Check if the image was successfully deleted from Cloudinary
    console.log("Cloudinary deletion response:", cloudinaryResponse);
    if (cloudinaryResponse.result === 'not found') {
      return res.status(404).json({ message: 'Image not found on Cloudinary' });
    }

    // Delete the image from MongoDB
    await SliderImage.findByIdAndDelete(id);
    res.status(200).json({ message: 'Image deleted successfully from both Cloudinary and MongoDB' });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ message: 'Error deleting image', error: error.message });
  }
};
