const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const SliderImage=require('./models/SliderImagesModel')
// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 2000;
const mongoUri = process.env.MONGO_URI;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


// Basic route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the homepage!",
    status: 200,
    data: {
      name: "John Doe",
      age: 30,
      hobbies: ["reading", "coding", "gaming"]
    }
  });
});



// image meta data upload 
app.post('/api/images', async (req, res) => {
  try {
    const newImage = new SliderImage({
      title: req.body.title,
      imageUrl: req.body.imageUrl, // Assuming imageUrl is passed in the body
      altText: req.body.altText, // Optional
    });

    await newImage.save(); // Save the image metadata to the database
    res.status(201).json(newImage); // Respond with the created image object
  } catch (error) {
    res.status(500).json({ message: 'Error adding image metadata', error });
  }
});






// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
