import express from 'express';
const router = express.Router();
import { getProducts, getProductsId, createProduct, updateProduct } from '../controllers/productsControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js';

router.get('/', getProducts).post(protect, admin, createProduct);
router.get('/:id', getProductsId);
router.get('/:id').get(getProductsId).put(protect, admin, updateProduct);

export default router;