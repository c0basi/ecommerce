import mongoose, { Schema, Types } from 'mongoose';
interface Product {
	title: string;
	desc: string;
	img: string;
	categories: Array<String>;
	size: Types.Array<String>;
	color: Types.Array<String>;
	price: number;
	instock: boolean;
}

const ProductSchema = new Schema<Product>(
	{
		title: { type: String, required: true, unique: true },
		desc: { type: String, required: true },
		img: { type: String, required: true },
		categories: { type: [String], required: true },
		size: { type: [String], required: true },
		color: { type: [String], required: true },
		price: { type: Number, required: true },
		instock: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

export default mongoose.model('Product', ProductSchema);
