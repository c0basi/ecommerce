import mongoose, { Schema } from 'mongoose';

interface CartItem {
	productId: string;
	quantity: number;
}
interface Product {
	userId: string;
	products: Array<CartItem>;
	img: string;
	categories: Array<String>;
	size: string;
	color: string;
	price: number;
}

const CartSchema = new Schema<Product>(
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
	},
	{ timestamps: true }
);

export default mongoose.model('User', CartSchema);
