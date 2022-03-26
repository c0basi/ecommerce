import { User } from '../../models/User';
// custom.request.d.ts
declare module Express {
	export interface Request {
		user?: User;
	}
}
