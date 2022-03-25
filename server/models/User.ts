import mongoose, { Schema } from 'mongoose';
interface User {
	username: string;
	email: string;
	password: string;
	isAdmin: Boolean;
}

const UserSchema = new Schema<User>(
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

export default mongoose.model('User', UserSchema);
