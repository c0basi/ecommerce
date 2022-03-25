import express from 'express';
import regsiterUser from '../controllers/authController';

const router = express.Router();

// REGISTER

router.post('/register', regsiterUser);

export default router;
