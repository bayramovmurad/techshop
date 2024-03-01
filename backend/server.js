import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
const port = process.env.PORT || 5678;
connectDB();

const app = express();
app.use(cors());

app.use('/api/products', productRoutes);


app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(port, () => console.log(`Server running on port ${port}`));