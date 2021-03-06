import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../types/DataTypes';
import { login } from './userActions';

interface UserContent {
	currentUser: User | null;
	loading: boolean;
	error: boolean;
}

const initialState: UserContent = {
	currentUser: null,
	loading: false,
	error: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, { payload }) => {
			state.currentUser = payload;
			state.loading = false;
		});
		builder.addCase(login.pending, (state, { payload }) => {
			state.loading = true;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.error = true;
			state.loading = false;
		});
	},
});

export const userActions = userSlice.actions;
export const userSelector = (state: RootState) => state.persistedItems.user;
export default userSlice.reducer;
