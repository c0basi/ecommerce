import express, { Request, Response } from 'express';
import verification from '../middleware/verifyToken';
import productActions from '../controllers/productController';

const productRouter = express.Router();

// CREATE PRODUCT
productRouter.post(
	'/',
	verification.verifyTokenAndAdmin,
	productActions.createProduct
);

// UPDATE PRODUCT
productRouter.put(
	'/:id',
	verification.verifyTokenAndAdmin,
	productActions.updateProduct
);
// DELETE PRODUCT
productRouter.delete(
	'/:id',
	verification.verifyTokenAndAdmin,
	productActions.deleteProduct
);
// GET product
productRouter.get('/find/:id', productActions.updateProduct);

// GET ALL PRODUCTS
productRouter.get('/find', productActions.fetchAllProducts);

export default productRouter;
