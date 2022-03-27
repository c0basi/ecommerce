import express, { Request, Response } from 'express';
import verification from '../middleware/verifyToken';
import orderActions from '../controllers/cartController';

const orderRouter = express.Router();

// Update Order

orderRouter.put(
	'/:id',
	verification.verifyTokenAndAdmin,
	orderActions.updateCart
);

// DELETE Order
orderRouter.delete(
	'/:id',
	verification.verifyTokenAndAdmin,
	orderActions.deleteCart
);

//GET Order
orderRouter.get(
	'/find/:userId',
	verification.verifyTokenAndAuth,
	orderActions.getCart
);

//GET ALL Orders
orderRouter.get(
	'/',
	verification.verifyTokenAndAdmin,
	orderActions.fetchAllCarts
);

export default orderRouter;
