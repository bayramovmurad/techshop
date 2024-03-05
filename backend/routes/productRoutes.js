import express from 'express';
const router = express.Router();
import { getProducts, getProductsId, createProduct, updateProduct } from '../controllers/productsControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductsId);
router.route('/:id').get(getProductsId).put(protect, admin, updateProduct);

export default router;