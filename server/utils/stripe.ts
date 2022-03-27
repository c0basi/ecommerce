import express, { Request, Response } from 'express';
import Stripe from 'stripe';
import 'dotenv/config';

const stripe_key: string = process.env.STRIPE_KEY!;

const stripe = new Stripe(stripe_key, {
	apiVersion: '2020-08-27',
});
const payment = async (req: Request, res: Response) => {
	try {
		const charge = await stripe.charges.create({
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: 'cad',
		});

		res.status(200).json(charge);
	} catch (err) {
		res.status(500).json(err);
	}
};

export default payment;
