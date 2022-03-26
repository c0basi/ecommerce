import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/auth';
import userRouter from './routes/user';
import 'dotenv/config';

const app: express.Application = express();

const uri: string = process.env.DB_CONNECT!;

mongoose
	.connect(uri)
	.then(() => console.log('Connected to database!!!'))
	.catch((err) => console.log(err));

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.get('/api', function (req: express.Request, res: express.Response) {
	res.send('Hello World!');
});

app.listen(process.env.PORT || 5000, function () {
	console.log(`starting app on: ${process.env.PORT}`);
});
