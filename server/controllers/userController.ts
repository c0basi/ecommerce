import express, { Request, Response } from 'express';
import CryptoJS from 'crypto-js';
import 'dotenv/config';

import User from '../models/User'; // add this to a type folder
// import { IgetUserRequest } from '../middleware/verifyToken'; // add this tpp
const router = express.Router();

// type authRequest = Request<{}, {}, { user: IgetUserRequest }>;

const secret: string = process.env.SECRET_KEY!;
// UPDATE

const updateUser = async (req: Request, res: Response) => {
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(
			req.body.password,
			secret
		).toString();
	}
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (err) {
		res.status(500).json(err);
	}
};

export default updateUser;
