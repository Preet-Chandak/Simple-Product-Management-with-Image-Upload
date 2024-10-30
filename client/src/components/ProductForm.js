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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="mt-1 block w-full text-sm text-gray-500"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded-md">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
          {product ? "Update" : "Add"} Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
