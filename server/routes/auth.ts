import express from 'express';
import { regsiterUser, loginUser } from '../controllers/authController';

const authRouter = express.Router();

// REGISTER

authRouter.post('/register', regsiterUser);

// LOGIN
authRouter.post('/login', loginUser);

export default authRouter;
