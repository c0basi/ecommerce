import { Request, Response } from 'express';
import User from '../models/User';

//
const regsiterUser = async (req: Request, res: Response) => {
	try {
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});
		const savedUser = await newUser.save();
		console.log(savedUser);
		res.status(201).json(savedUser);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
};

export default regsiterUser;
