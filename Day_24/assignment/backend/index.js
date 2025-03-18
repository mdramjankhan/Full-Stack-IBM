require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const { protect } = require('./middleware/authMiddleware');
const morgan = require('morgan');

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true,
}));

app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.use('/api/auth', authRoutes);

app.get('/api/protected', protect, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});