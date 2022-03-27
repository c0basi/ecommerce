import express, { Request, Response } from 'express';
import CryptoJS from 'crypto-js';
import 'dotenv/config';

import Product from '../models/Product'; // add this to a type folder
// import { IgetUserRequest } from '../middleware/verifyToken'; // add this tpp

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

// UPDATE
const updateProduct = async (req: Request, res: Response) => {
	try {
		const updatedproduct = await Product.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedproduct);
	} catch (err) {
		res.status(500).json(err);
	}
};

// DELETE
const deleteProduct = async (req: Request, res: Response) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json('product has been deleted');
	} catch (err) {
		res.status(500).json(err);
	}
};

// GET PRODUCT
const getProduct = async (req: Request, res: Response) => {
	try {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.status(200).json(product);
		}
	} catch (err) {
		res.status(500).json(err);
	}
};

// GET ALL Products
const fetchAllProducts = async (req: Request, res: Response) => {
	try {
		const qNew = req.query.new;
		const qCategory = req.query.category;
		let products;
		if (qNew) {
			products = await Product.find().sort({ createdAt: -1 }).limit(5);
		} else if (qCategory) {
			products = await Product.find({
				categories: { $in: [qCategory] },
			});
		} else {
			products = await Product.find();
		}
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json(err);
	}
};

export default {
	createProduct,
	updateProduct,
	deleteProduct,
	getProduct,
	fetchAllProducts,
};
