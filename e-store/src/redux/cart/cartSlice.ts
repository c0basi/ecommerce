import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from '../../components/Products/ProductType';

interface cartContent {
	products: ProductItem[];
	quantity: number;
	total: number;
}

const initialState: cartContent = {
	products: [],
	quantity: 0,
	total: 0,
};
const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, { payload }) => {
			state.quantity += 1;
			state.products.push(payload.product);
			state.total += payload.price;
		},
	},
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
