import express from 'express';
import mongoose from 'mongoose';
import router from './routes/auth';
import 'dotenv/config';

const app: express.Application = express();

const uri: string = process.env.DB_CONNECT!;

mongoose
	.connect(uri)
	.then(() => console.log('Connected to database!!!'))
	.catch((err) => console.log(err));

app.use(express.json());

app.use('/test', router);

app.get('/api', function (req: express.Request, res: express.Response) {
	res.send('Hello World!');
});

app.listen(process.env.PORT || 5000, function () {
	console.log(`starting app on: ${process.env.PORT}`);
});
