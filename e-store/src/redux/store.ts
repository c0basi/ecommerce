import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cartSlice';
import productReducer from './products/productSlice';
import productsReducer from './products/productsSlice';
import userReducer from './user/userSlice';
import storage from 'redux-persist/lib/storage';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const store = configureStore({
	reducer: {
		cart: cartReducer,
		product: productReducer,
		products: productsReducer,
		user: persistedReducer,
	},
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
