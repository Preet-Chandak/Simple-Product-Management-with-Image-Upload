import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const fetchProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsFormVisible(true);
  };

  const handleSaveProduct = () => {
    fetchProducts();
    setIsFormVisible(false);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsFormVisible(true);
  };

  const handleDeleteProduct = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <button
          onClick={handleAddProduct}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Add Product
        </button>
      </header>

      {isFormVisible ? (
        <ProductForm
          product={selectedProduct}
          onSave={handleSaveProduct}
          onCancel={() => setIsFormVisible(false)}
        />
      ) : (
        <ProductList products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
      )}
    </div>
  );
}

export default App;
