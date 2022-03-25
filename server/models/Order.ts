import mongoose, { Schema } from 'mongoose';

interface CartItem {
	productId: string;
	quantity: number;
}
interface Product {
	userId: string;
	products: Array<CartItem>;
	amount: number;
	address: object;
	status: string;
}

const OrderSchema = new Schema<Product>(
	{
		userId: { type: String, required: true },
		products: [
			{
				productId: {
					type: String,
				},
				quantity: {
					type: Number,
					default: 1,
				},
			},
		],
		amount: { type: Number, required: true },
		address: { type: Object, required: true },
		status: { type: String, default: 'pending' },
	},
	{ timestamps: true }
);

export default mongoose.model('User', OrderSchema);
