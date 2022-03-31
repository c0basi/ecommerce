import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from '../../components/Products/ProductType';
import { RootState } from '../../redux/store';

interface cartContent {
	products: ProductItem[];
	quantity: number;
	total: number;
}

interface ProductPayload {
	product: ProductItem;
	quantity: number;
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
		addProduct: (state, { payload }: PayloadAction<ProductPayload>) => {
			state.quantity += 1;
			state.products.push(payload.product);
			state.total += payload.product.price * payload.quantity;
		},
	},
});

export const { addProduct } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default cartSlice.reducer;
