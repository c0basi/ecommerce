import express, { Request, Response } from 'express';
import CryptoJS from 'crypto-js';
import 'dotenv/config';

import Product from '../models/Product'; // add this to a type folder
// import { IgetUserRequest } from '../middleware/verifyToken'; // add this tpp
const router = express.Router();

const secret: string = process.env.SECRET_KEY!;

// CREATE
const createProduct = async (req: Request, res: Response) => {
	const newProduct = new Product(req.body);
	try {
		const savedProduct = await newProduct.save();
		res.status(200).json(savedProduct);
	} catch (err) {
		res.status(500).json(err);
	}
};

export default { createProduct };
