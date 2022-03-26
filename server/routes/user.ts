import express, { Request, Response } from 'express';
import verification from '../middleware/verifyToken';
import updateUser from '../controllers/userController';

const router = express.Router();

// Update user route

router.put('/:id', verification.verifyTokenAndAuth, updateUser);

export default router;
