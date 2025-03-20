import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createProduct, getProductData } from "../controllers/data.controller.js";

const productRouter = express.Router();

productRouter.get('/dashboard', getProductData);
productRouter.post('/create-product', createProduct);

export default productRouter;