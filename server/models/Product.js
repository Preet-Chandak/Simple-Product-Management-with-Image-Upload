const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
  },
  { timestamps: true } //create the product timestamp that will store the time of creation of that product
);

module.exports = mongoose.model("Product", productSchema);
