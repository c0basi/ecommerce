import express, { Request, Response } from 'express';
import 'dotenv/config';

import Cart from '../models/Cart'; // add this to a type folder

const secret: string = process.env.SECRET_KEY!;

// CREATE
const createCart = async (req: Request, res: Response) => {
	const newCart = new Cart(req.body);
	try {
		const savedCart = await newCart.save();
		res.status(200).json(savedCart);
	} catch (err) {
		res.status(500).json(err);
	}
};

// UPDATE
const updateCart = async (req: Request, res: Response) => {
	try {
		const updatedCart = await Cart.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedCart);
	} catch (err) {
		res.status(500).json(err);
	}
};

// DELETE
const deleteCart = async (req: Request, res: Response) => {
	try {
		await Cart.findByIdAndDelete(req.params.id);
		res.status(200).json('Cart content has been deleted');
	} catch (err) {
		res.status(500).json(err);
	}
};

// GET Cart
const getCart = async (req: Request, res: Response) => {
	try {
		const cart = await Cart.findOne({ userId: req.params.userId });
		if (cart) {
			res.status(200).json(Cart);
		}
	} catch (err) {
		res.status(500).json(err);
	}
};

// GET ALL Carts
const fetchAllCarts = async (req: Request, res: Response) => {
	try {
		const carts = await Cart.find();
		res.status(200).json(carts);
	} catch (err) {
		res.status(500).json(err);
	}
};

export default {
	createCart,
	updateCart,
	deleteCart,
	getCart,
	fetchAllCarts,
};
