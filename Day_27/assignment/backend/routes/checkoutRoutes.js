const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        const jwt = require('jsonwebtoken');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// Process checkout
router.post('/', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('cart.product');
        if (!user || !user.cart.length) {
            return res.status(400).json({ message: 'Cart is empty' });
        }


        user.cart = [];
        await user.save();

        res.json({ message: 'Checkout successful (mock)' });
    } catch (err) {
        res.status(500).json({ message: 'Server error during checkout' });
    }
});

module.exports = router;