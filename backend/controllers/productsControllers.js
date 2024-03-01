import asyncHandler from "../middleware/asyncHandler";
import Product from "../models/productModel";

export const getProducts = asyncHandler(async (req, res) => {
        const products = await Product.find({});
        res.json(products);
    })

export const getProductsId = 
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            return res.json(product);
        }
        res.status(404);
        throw new Error('Resource not found');
    })