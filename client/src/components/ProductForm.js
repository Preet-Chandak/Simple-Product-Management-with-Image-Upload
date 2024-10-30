import React, { useState } from "react";
import axios from "axios";

const ProductForm = ({ product, onSave, onCancel }) => {
  const [name, setName] = useState(product ? product.name : "");
  const [description, setDescription] = useState(product ? product.description : "");
  const [price, setPrice] = useState(product ? product.price : "");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    if (image) formData.append("image", image);

    try {
      if (product) {
        await axios.put(`${process.env.REACT_APP_API_URL}/api/products/${product._id}`, formData);
      } else {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/products`, formData);
      }
      onSave();
    } catch (error) {
      console.error("Failed to save product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto lg:max-w-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">
        {product ? "Update Product" : "Add New Product"}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="col-span-1 sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            rows="3"
            placeholder="Enter product description"
            required
          ></textarea>
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400 transition-all duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white font-semibold  rounded-md shadow-md hover:bg-gray-800 transition-all duration-200"
        >
          {product ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
