import React from "react";

import ProductCard from "./ProductCard";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
