const express = require("express");
const router = express.Router();
const multer = require("multer");
const {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require("../controllers/productController");

const upload = multer({ dest: "uploads/" });

router.post("/products", upload.single("image"), createProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.put("/products/:id", upload.single("image"), updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
