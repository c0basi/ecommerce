import mongoose, { Schema, Types } from 'mongoose';

interface CartItem {
	productId: string;
	quantity: number;
}
interface Order {
	userId: string;
	products: Types.Array<CartItem>;
	amount: number;
	address: object;
	status: string;
}

const OrderSchema = new Schema<Order>(
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

export default mongoose.model<Order>('Order', OrderSchema);
