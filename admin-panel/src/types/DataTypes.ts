export interface Data {
	id: number;
	product: string;
	img: string;
	customer: string;
	date: string;
	amount: number;
	method: string;
	status: 'Approved' | 'Pending';
}

export interface userData {
	name: string;
	'Active User': number;
}

export interface ProductData {
	name: string;
	Sales: number;
}
export interface chartData {
	name: string;
	Sales?: number;
	'Active User'?: number;
}

export interface User {
	_id: string;
	username: string;
	email: string;
	password: string;
	isAdmin: boolean;
	img: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}
