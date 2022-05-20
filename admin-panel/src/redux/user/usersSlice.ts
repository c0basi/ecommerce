import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/DataTypes';
import { RootState } from '../store';
import { getAllUsers } from './userActions';
interface usersContent {
	users: User[];
	loading: boolean;
	error: string;
}

const initialState: usersContent = {
	users: [] as User[],
	loading: false,
	error: '',
};

const usersSlice = createSlice({
	name: 'users',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
			state.users = payload;
			console.log(payload);

			state.loading = false;
		});
		builder.addCase(getAllUsers.pending, (state, { payload }) => {
			state.loading = true;
		});
		builder.addCase(getAllUsers.rejected, (state, action) => {
			state.loading = false;
			state.error = 'Something went wrong';
		});
	},
});

export const usersAction = usersSlice.actions;
export const usersSelector = (state: RootState) => state.users;
export default usersSlice.reducer;
