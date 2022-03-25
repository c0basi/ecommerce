import mongoose, { Schema, Types } from 'mongoose';

interface CartItem {
	productId: string;
	quantity: number;
}
interface Cart {
	userId: string;
	products: Types.Array<CartItem>;
}

const CartSchema = new Schema<Cart>(
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

export default mongoose.model<Cart>('Cart', CartSchema);
