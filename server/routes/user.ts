import express, { Request, Response } from 'express';
import verification from '../middleware/verifyToken';
import userActions from '../controllers/userController';

const router = express.Router();

// Update user route

router.put('/:id', verification.verifyTokenAndAuth, userActions.updateUser);

// DELETE USER
router.delete('/:id', verification.verifyTokenAndAuth, userActions.deleteUser);

//GET USER
router.get('/find/:id', verification.verifyTokenAndAdmin, userActions.getUser);

export default router;
