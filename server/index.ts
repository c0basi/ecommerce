import express, { application } from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/auth';
import userRouter from './routes/user';
import productRouter from './routes/product';
import cartRouter from './routes/cart';
import orderRouter from './routes/order';
import stripeRouter from './routes/stripe';
import 'dotenv/config';
import cors from 'cors';
const app: express.Application = express();

const uri: string = process.env.DB_CONNECT!;

mongoose
	.connect(uri)
	.then(() => console.log('Connected to database!!!'))
	.catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', orderRouter);
app.use('/api/checkout', stripeRouter);

app.get('/api', function (req: express.Request, res: express.Response) {
	res.send('Hello World!');
});

app.listen(process.env.PORT || 5000, function () {
	console.log(`starting app on: ${process.env.PORT}`);
});
