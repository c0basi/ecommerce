import express, { Request, Response } from 'express';
import verification from '../middleware/verifyToken';
import cartActions from '../controllers/cartController';

const cartRouter = express.Router();

// Update cart

cartRouter.put('/:id', verification.verifyTokenAndAuth, cartActions.updateCart);

// DELETE Cart
cartRouter.delete(
	'/:id',
	verification.verifyTokenAndAuth,
	cartActions.deleteCart
);

//GET CART
cartRouter.get(
	'/find/:userId',
	verification.verifyTokenAndAuth,
	cartActions.getCart
);

//GET ALL
cartRouter.get(
	'/',
	verification.verifyTokenAndAdmin,
	cartActions.fetchAllCarts
);

export default cartRouter;
