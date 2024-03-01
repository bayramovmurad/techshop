import express from 'express';
const router = express.Router();
import {getProducts, getProductsId} from '../controllers/productsControllers.js'

router.get('/', getProducts);
router.get('/:id', getProductsId);

export default router;