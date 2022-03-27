import express, { Request, Response } from 'express';
import 'dotenv/config';

import Order from '../models/Order'; // add this to a type folder

const secret: string = process.env.SECRET_KEY!;

// CREATE
const createOrder = async (req: Request, res: Response) => {
	const newOrder = new Order(req.body);
	try {
		const savedOrder = await newOrder.save();
		res.status(200).json(savedOrder);
	} catch (err) {
		res.status(500).json(err);
	}
};

// UPDATE
const updateOrder = async (req: Request, res: Response) => {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedOrder);
	} catch (err) {
		res.status(500).json(err);
	}
};

// DELETE
const deleteOrder = async (req: Request, res: Response) => {
	try {
		await Order.findByIdAndDelete(req.params.id);
		res.status(200).json('Order content has been deleted');
	} catch (err) {
		res.status(500).json(err);
	}
};

// GET Order
const getOrder = async (req: Request, res: Response) => {
	try {
		const orders = await Order.find({ userId: req.params.userId });
		if (orders) {
			res.status(200).json(orders);
		}
	} catch (err) {
		res.status(500).json(err);
	}
};

// GET ALL Orders
const fetchAllOrders = async (req: Request, res: Response) => {
	try {
		const Orders = await Order.find();
		res.status(200).json(Orders);
	} catch (err) {
		res.status(500).json(err);
	}
};

// MOnthly order income

const monthlyOrderStats = async (req: Request, res: Response) => {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(lastMonth.setMonth(lastMonth.getMonth() - 1));
	try {
		const income = await Order.aggregate([
			{ $match: { createdAt: { $gte: previousMonth } } },
			{
				$project: {
					month: { $month: '$createdAt' },
					sales: '$amount',
				},
			},
			{ $group: { _id: '$month', total: { $sum: '$sales' } } },
		]);
		res.status(200).json(income);
	} catch (err) {
		res.status(500).json(err);
	}
};

export default {
	createOrder,
	updateOrder,
	deleteOrder,
	getOrder,
	fetchAllOrders,
	monthlyOrderStats,
};
