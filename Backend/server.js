const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const imageRoutes = require('./routes/ImageSliderRoutes'); //image slider routes
const bodyParser = require('body-parser');
const catagoryRoutes=require('./routes/CatagoryImagesRoute')
const contactUsRoutes =require('./routes/ContactUsRoute')
const productRoutes = require('./routes/ProductRoutes');



dotenv.config();

const app = express();
const port = process.env.PORT || 2000;
const mongoUri = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));



// Connect to MongoDB
mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/images', imageRoutes); 

app.use('/catagories', catagoryRoutes); 

app.use('/contact-us', contactUsRoutes);

app.use('/products', productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
