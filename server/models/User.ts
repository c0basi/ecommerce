import mongoose, { Schema, Document, Model } from 'mongoose';
export interface User extends Document {
	username: string;
	email: string;
	password: string;
	isAdmin: Boolean;
	img: string;
}

const UserSchema = new Schema<User, Model<User>>(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: {
			type: Boolean,
			default: false,
		},
		img: { type: String, required: false },
	},
	{ timestamps: true }
);

export default mongoose.model<User>('User', UserSchema);
