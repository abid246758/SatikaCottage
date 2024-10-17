import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]); // State for storing fetched images
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission status

  // Fetch all uploaded images from the server
  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/images');
      const data = await response.json();

      if (response.ok) {
        setImages(data); // Set images in state
      } else {
        setError(data.message || 'Error fetching images.');
      }
    } catch (error) {
      setError('Error fetching images: ' + error.message);
    }
  };

  // Handle image upload
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log("Submit triggered"); // Add this line
  
    if (!image) {
      setError('Please select an image to upload.');
      return;
    }
  
    if (isSubmitting) return;
  
    setIsSubmitting(true);
    setLoading(true);
    setError('');
    setSuccessMessage('');
  
    const formData = new FormData();
    formData.append('image', image);
  
    console.log("FormData prepared"); // Add this line
  
    try {
      const response = await fetch('http://localhost:3000/api/images', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSuccessMessage('Image uploaded successfully!');
        setImage(null);
        fetchImages(); // Refresh the images after upload
      } else {
        setError(data.message || 'Error uploading image.');
      }
    } catch (error) {
      setError('Error uploading image: ' + error.message);
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }
  };
  

  // Handle image delete
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/images/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Image deleted successfully!');
        fetchImages(); // Refresh the images after delete
      } else {
        setError(data.message || 'Error deleting image.');
      }
    } catch (error) {
      setError('Error deleting image: ' + error.message);
    }
  };

  // UseEffect to fetch images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="App">
      <h1>Image Upload</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>
            Select Image:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </label>
        </div>
        <button type="submit" disabled={loading || isSubmitting}>
          {loading ? 'Uploading...' : 'Upload Image'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      {/* Display uploaded images */}
      <h2>Uploaded Images</h2>
      <div className="image-gallery" style={{ display: "flex" }}>
        {images.length > 0 ? (
          images.map((img) => (
            <div key={img._id} className="image-item" style={{ margin: "20px" }}>
              <img src={img.imageUrl} alt={img.altText} style={{ height: "300px" }} />
              <button onClick={() => handleDelete(img._id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No images uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
