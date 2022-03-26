import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { User } from '../models/User';
import dotenv from 'dotenv';

// export interface IgetUserRequest extends Request {
// 	user: User;
// }
// type authRequest = Request<{}, {}, { user: IgetUserRequest; }>;

const access_token: string = process.env.SECRET_KEY!;

// this needs a lot of fixing
const verifyToken = (req: Request | any, res: Response, next: Function) => {
	try {
		const authHeader = req.headers.token as string;
		const token = authHeader && authHeader.split(' ')[1];
		if (token == null)
			return res.status(401).json('You are not authenticated!');
		jwt.verify(token, access_token, (err, user) => {
			if (err) {
				res.status(403).json('Token is not valid!');
			} else {
				req.user = user as User;
				next();
			}
		});
	} catch (err) {
		res.status(403).json('Token is not valid!');
	}
};

const verifyTokenAndAuth = (
	req: Request | any,
	res: Response,
	next: Function
) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json('You are not aloowed to do that!');
		}
	});
};

const verifyTokenAndAdmin = (
	req: Request | any,
	res: Response,
	next: Function
) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(403).json('You are not aloowed to do that!');
		}
	});
};

export default { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin };
