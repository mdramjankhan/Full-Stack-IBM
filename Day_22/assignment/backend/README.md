# Node.js Express Backend

## Setup Instructions

1. Clone the repository
2. Navigate to the backend folder: `cd backend`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

## API Endpoints

- GET `/` - Welcome message
- GET `/products` - Get all products
- GET `/products/:id` - Get product by ID
- POST `/products` - Create new product
- PUT `/products/:id` - Update product
- DELETE `/products/:id` - Delete product

## Project Structure

- `index.js` - Main server file
- `data.js` - Products data
- `logger.js` - Logging middleware
- `products.json` - Product storage
- `utils/` - Utility modules
 - `fileHandler.js` - File operations
  - `systemInfo.js` - System information
- `server.log` - Request logs