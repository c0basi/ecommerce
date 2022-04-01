export interface User {
	_id: string;
	username: string;
	email: string;
	password: string;
	isAdmin: boolean;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}
