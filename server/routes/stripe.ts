import express from 'express';
import payment from '../utils/stripe';

const stripeRouter = express.Router();

stripeRouter.post('/payment', payment);

export default stripeRouter;
