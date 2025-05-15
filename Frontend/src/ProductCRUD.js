import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCRUD = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: '',
    price: '',
    offeredPrice: '',
    description: '',
    images: []
  });
  const [productId, setProductId] = useState('');

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:3001/products');
    setProducts(response.data);
  };

  const createProduct = async () => {
    const formData = new FormData();
    Object.keys(form).forEach(key => {
      if (key !== 'images') {
        formData.append(key, form[key]);
      }
    });
    Array.from(form.images).forEach(file => {
      formData.append('images', file);
    });
    await axios.post('http://localhost:3001/products', formData);
    fetchProducts();
    clearForm();
  };

  const updateProduct = async () => {
    const formData = new FormData();
    Object.keys(form).forEach(key => {
      formData.append(key, form[key]);
    });
    await axios.put(`http://localhost:3001/products/${productId}`, formData);
    fetchProducts();
    clearForm();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3001/products/${id}`);
    fetchProducts();
  };

  const clearForm = () => {
    setForm({
      title: '',
      price: '',
      offeredPrice: '',
      description: '',
      images: []
    });
    setProductId('');
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleImagePreview = () => {
    return Array.from(form.images).map((file, index) => (
      <div key={index} className="inline-block p-2">
        <img
          src={URL.createObjectURL(file)}
          alt={`preview-${index}`}
          className="w-20 h-20 object-cover"
        />
      </div>
    ));
  };

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <input
          className="p-2 border border-gray-300 rounded w-full"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="p-2 border border-gray-300 rounded w-full"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          className="p-2 border border-gray-300 rounded w-full"
          placeholder="Offered Price"
          type="number"
          value={form.offeredPrice}
          onChange={(e) => setForm({ ...form, offeredPrice: e.target.value })}
        />
        <textarea
          className="p-2 border border-gray-300 rounded w-full"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="p-2 border border-gray-300 rounded w-full"
          type="file"
          multiple
          onChange={(e) => setForm({ ...form, images: e.target.files })}
        />
        <div className="flex space-x-2 mt-2">{handleImagePreview()}</div>
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={createProduct}
        >
          Create Product
        </button>
        {productId && (
          <button
            className="p-2 bg-yellow-500 text-white rounded"
            onClick={updateProduct}
          >
            Update Product
          </button>
        )}
      </div>

      <div className="space-y-4">
  {products.map(product => (
    <div key={product._id} className="border p-4 rounded shadow">
      <h3 className="text-xl font-bold">{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Offered Price: ${product.offeredPrice}</p>
      <p>{product.description}</p>
      
      {/* Display product images */}
      <div className="flex space-x-2 mt-2">
        {product.images && product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${product.title} - View ${index + 1}`}
            className="w-20 h-20 object-cover rounded"
          />
        ))}
      </div>

      <div className="space-x-2 mt-2">
        <button
          className="p-2 bg-yellow-500 text-white rounded"
          onClick={() => {
            setProductId(product._id);
            setForm({
              title: product.title,
              price: product.price,
              offeredPrice: product.offeredPrice,
              description: product.description,
              images: []  // You may update this to pre-fill images if needed
            });
          }}
        >
          Edit
        </button>
        <button
          className="p-2 bg-red-500 text-white rounded"
          onClick={() => deleteProduct(product._id)}
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default ProductCRUD;
