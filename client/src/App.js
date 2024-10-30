import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
    setProducts(response.data);
    setFilteredProducts(response.data);
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
    toast.success("Product saved successfully!");
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsFormVisible(true);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/products/${id}`);
      fetchProducts();
      toast.info("Product deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete product.");
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="w-full mx-auto p-4 sm:p-6 lg:p-8 pt-24 space-y-6">
      <header className="fixed top-0 left-0 w-full bg-black text-white p-4 pb-6 shadow-md flex flex-wrap justify-between items-center z-10">
      <a href="/"> <h1 className="text-xl sm:text-2xl font-bold">Product Management</h1> </a>
      <button
        onClick={handleAddProduct}
        className="px-3 py-1.5 sm:px-4 sm:py-2 mt-2 sm:mt-0 bg-white text-black font-semibold rounded-md hover:bg-gray-200"
      >
        Add Product
      </button>
    </header>
    <br />
    <br />

      <div className="space-y-4">
        {isFormVisible ? (
          <ProductForm
            product={selectedProduct}
            onSave={handleSaveProduct}
            onCancel={() => setIsFormVisible(false)}
          />
        ) : (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-black">All Products</h2>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-1/3 px-4 py-2 border border-gray-400 rounded-md "
              />
            </div>

            <ProductList
              products={filteredProducts}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          </div>
        )}
      </div>
      <ToastContainer
        autoClose={1000} 
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </div>
  );
}

export default App;
