import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product._id} className="bg-white p-4 rounded-md shadow-md space-y-2">
          <img
            src={`http://localhost:5000/${product.image}`}
            alt={product.name}
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-blue-600 font-semibold">${product.price}</p>
          <div className="flex justify-end space-x-4">
            <button onClick={() => onEdit(product)} className="px-3 py-1 bg-yellow-400 rounded-md text-white">
              Edit
            </button>
            <button onClick={() => onDelete(product._id)} className="px-3 py-1 bg-red-500 rounded-md text-white">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
