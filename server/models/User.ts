import mongoose, { Schema, Document, Model } from 'mongoose';
interface User extends Document {
	username: string;
	email: string;
	password: string;
	isAdmin: Boolean;
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
	},
	{ timestamps: true }
);

export default mongoose.model<User>('User', UserSchema);
