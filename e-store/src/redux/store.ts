import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cartSlice';
import productReducer from './products/productSlice';
import productsReducer from './products/productsSlice';
import userReducer from './user/userSlice';
const store = configureStore({
	reducer: {
		cart: cartReducer,
		product: productReducer,
		products: productsReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
