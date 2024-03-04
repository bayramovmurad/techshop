import express from 'express';
const router = express.Router();
import { getProducts, getProductsId, createProduct } from '../controllers/productsControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js';

router.get('/', getProducts).post(protect,admin,createProduct);
router.get('/:id', getProductsId);

export default router;