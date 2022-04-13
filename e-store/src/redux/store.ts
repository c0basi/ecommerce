import { combineReducers, configureStore } from '@reduxjs/toolkit';

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

// move this to a separate file
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
	reducer: {
		persistedItems: persistedReducer,
		product: productReducer,
		products: productsReducer,
		// user: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
