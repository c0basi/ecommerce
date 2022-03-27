import express, { Request, Response } from 'express';
import verification from '../middleware/verifyToken';
import orderActions from '../controllers/orderController';

const orderRouter = express.Router();

// Create Order
orderRouter.post(
	'/',
	verification.verifyTokenAndAdmin,
	orderActions.createOrder
);
// Update Order

orderRouter.put(
	'/:id',
	verification.verifyTokenAndAdmin,
	orderActions.updateOrder
);

// DELETE Order
orderRouter.delete(
	'/:id',
	verification.verifyTokenAndAdmin,
	orderActions.deleteOrder
);

//GET Order
orderRouter.get(
	'/find/:userId',
	verification.verifyTokenAndAuth,
	orderActions.getOrder
);

//GET ALL Orders
orderRouter.get(
	'/',
	verification.verifyTokenAndAdmin,
	orderActions.fetchAllOrders
);

// GET ORDER STATS
orderRouter.get(
	'/income',
	verification.verifyTokenAndAdmin,
	orderActions.monthlyOrderStats
);

export default orderRouter;
