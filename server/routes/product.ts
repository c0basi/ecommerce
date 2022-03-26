import express, { Request, Response } from 'express';
import verification from '../middleware/verifyToken';
import productActions from '../controllers/productController';

const productRouter = express.Router();

/// CREATE PRODUCT

productRouter.post(
	'/',
	verification.verifyTokenAndAdmin,
	productActions.createProduct
);

export default productRouter;
