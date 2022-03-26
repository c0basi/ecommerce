import express, { Request, Response } from 'express';
import verification from '../middleware/verifyToken';
import userActions from '../controllers/userController';

const userRouter = express.Router();

// Update user route

userRouter.put('/:id', verification.verifyTokenAndAuth, userActions.updateUser);

// DELETE USER
userRouter.delete(
	'/:id',
	verification.verifyTokenAndAuth,
	userActions.deleteUser
);

//GET USER
userRouter.get(
	'/find/:id',
	verification.verifyTokenAndAdmin,
	userActions.getUser
);

//GET ALL USERS
userRouter.get('/', verification.verifyTokenAndAdmin, userActions.fetchAll);

// USER STATS
userRouter.get(
	'/stats',
	verification.verifyTokenAndAdmin,
	userActions.userStats
);
export default userRouter;
