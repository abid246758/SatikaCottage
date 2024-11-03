const CatagoryImage = require('../models/CatagoryImagesModel');
const cloudinary = require('../Utils/cloudinaryConfig');


// Upload a category image
exports.uploadImage = async (req, res) => {

  function formatString(input) {
    return input
      .toLowerCase()             
      .replace(/\s+/g, '')      
      .trim();
  }
 
  try {
    // Create a new image document with category name and image details
    const catagoryName=formatString(req.body.type)

    const newImage = new CatagoryImage({
      name: req.file.originalname, 
      type: req.body.type, 
      catagory: catagoryName, 
      imageUrl: req.file.path, 
      cloudinary_id: req.file.filename,
    });

    // Save the new image document to the database
    await newImage.save();
    res.status(201).json(newImage); // Send back the saved image as response
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload image', details: err.message });
  }
};


// Get all slider images
exports.getImages = async (req, res) => {
  try {
    const images = await CatagoryImage.find();
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch images', details: err.message });
  }
};

  
// delete catagory image 
  
exports.deleteImage = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the image in MongoDB
    const image = await CatagoryImage.findById(id);
    if (!image) return res.status(404).json({ message: 'Image not found' });

    // Attempt to delete from Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.destroy(image.cloudinary_id);

    if (cloudinaryResponse.result !== 'ok') {
      return res.status(404).json({ message: 'Image not found on Cloudinary' });
    }

    // Delete the image from MongoDB
    await CatagoryImage.findByIdAndDelete(id);
    
    res.status(200).json({ message: 'Image deleted successfully from both Cloudinary and MongoDB' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ message: 'Error deleting image', error });
  }
};