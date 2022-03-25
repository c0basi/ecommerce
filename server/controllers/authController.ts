import { Request, Response } from 'express';
import User from '../models/User';
import CryptoJS from 'crypto-js';
import 'dotenv/config';

const passwordhash: string = process.env.PASS_SEC!;
// REGISTER
export const regsiterUser = async (req: Request, res: Response) => {
	try {
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: CryptoJS.AES.encrypt(
				req.body.password,
				passwordhash
			).toString(),
		});
		const savedUser = await newUser.save();
		console.log(savedUser);
		res.status(201).json(savedUser);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
};

// LOGIN
export const loginUser = async (req: Request, res: Response) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		if (!user) {
			res.status(401).json('Wrong crendentials');
			return;
		}
		const hashedPassword =
			user && CryptoJS.AES.decrypt(user.password, passwordhash);
		const password = hashedPassword?.toString(CryptoJS.enc.Utf8);
		if (password !== req.body.password) {
			res.status(401).json('Wroong crendentials');
		} else {
			res.status(200).json(user);
		}
	} catch (err) {
		res.status(500).json(err);
	}
};
