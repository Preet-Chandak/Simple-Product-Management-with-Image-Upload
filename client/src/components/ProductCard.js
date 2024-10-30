import React from "react";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md space-y-2 flex flex-col">
      <img
        src={`${process.env.REACT_APP_API_URL}/${product.image}`}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-blue-600 font-semibold">₹{product.price}</p>
      <div className="flex justify-end space-x-4 mt-auto">
        <button
          onClick={() => onEdit(product)}
          className="px-3 py-1 bg-yellow-400 rounded-md text-white hover:bg-yellow-500 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product._id)}
          className="px-3 py-1 bg-red-500 rounded-md text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
