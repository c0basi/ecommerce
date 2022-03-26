import { Request, Response } from 'express';
import User from '../models/User';
import CryptoJS from 'crypto-js';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

const passwordhash: string = process.env.PASS_SEC!;
const secretKey: string = process.env.SECRET_KEY!;
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
		const originalPassword = hashedPassword?.toString(CryptoJS.enc.Utf8);
		if (originalPassword !== req.body.password) {
			res.status(401).json('Wrong crendentials');
		} else {
			const accessToken = jwt.sign(
				{ id: user._id, isAdmin: user.isAdmin },
				secretKey,
				{ expiresIn: '3d' }
			);
			const { password, ...others } = user.toJSON();
			res.status(200).json({ ...others, accessToken });
		}
	} catch (err) {
		res.status(500).json(err);
	}
};
