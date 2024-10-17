const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const imageRoutes = require('./routes/ImageSliderRoutes'); //image slider routes

dotenv.config();

const app = express();
const port = process.env.PORT || 2000;
const mongoUri = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/images', imageRoutes);  // Include your image routes

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
