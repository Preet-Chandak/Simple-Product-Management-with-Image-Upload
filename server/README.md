# Product Management Backend

This is an Express backend application for managing products, providing a RESTful API with image upload functionality using Multer.

## Features

- Create, read, update, and delete products.
- Handle image uploads and serve them from a static directory.

## Tech Stack

- Node.js
- Express
- MongoDB (with Mongoose)
- Multer (for handling file uploads)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Preet-Chandak/Simple-Product-Management-with-Image-Upload.git
   cd server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string and server port:

   ```plaintext
   MONGO_URI=<your-mongodb-uri>
   PORT=5000
   ```

4. Start the server:

   ```bash
   npm run dev 
   ```

5. The API will be available at `http://localhost:5000/api/products`.

## API Endpoints

- **POST /api/products**: Create a new product.
- **GET /api/products**: Fetch all products.
- **GET /api/products/:id**: Fetch a product by ID.
- **PUT /api/products/:id**: Update product details.
- **DELETE /api/products/:id**: Delete a product by ID.
