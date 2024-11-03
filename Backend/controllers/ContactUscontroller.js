const ContactUs = require('../models/ContactUsModel');

// Upload data
exports.uploadData = async (req, res) => {
  try {
    const input = new ContactUs({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone, 
      message: req.body.message,
    });

    await input.save();
    res.status(201).json(input);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact information', details: err.message });
  }
};

// Get all data
exports.getData = async (req, res) => {
  try {
    const input = await ContactUs.find();
    res.status(200).json(input);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contact information', details: err.message });
  }
};

// Delete a specific contact message by ID
exports.deleteData = async (req, res) => {
    try {
      const { id } = req.params;
      
      // Find and delete the contact message by ID
      const deletedData = await ContactUs.findByIdAndDelete(id);
  
      if (!deletedData) {
        return res.status(404).json({ message: 'Message not found' });
      }
  
      res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting message', error: error.message });
    }
  };