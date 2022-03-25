import express from 'express';
import { regsiterUser, loginUser } from '../controllers/authController';

const router = express.Router();

// REGISTER

router.post('/register', regsiterUser);

router.post('/login', loginUser);

export default router;
