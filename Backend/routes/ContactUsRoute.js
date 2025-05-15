const express = require('express');
const router = express.Router();
const contactUsController = require('../controllers/ContactUscontroller');

// Route to upload contact us data
router.post('/', contactUsController.uploadData);

// Route to get all contact us data
router.get('/', contactUsController.getData);


// delete data 
router.delete('/:id', contactUsController.deleteData);

module.exports = router;
