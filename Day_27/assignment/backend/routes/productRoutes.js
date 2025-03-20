const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get('/', async (req, res) => {
  const { page = 1, limit = 10, category } = req.query;
  const query = category ? { category } : {};
  const products = await Product.find(query)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(products);
});

module.exports = router;