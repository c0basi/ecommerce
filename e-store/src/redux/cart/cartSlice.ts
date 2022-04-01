import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from '../../components/Products/ProductType';
import { RootState } from '../../redux/store';

interface ProductCartItem extends ProductItem {
	quantity: number;
}
interface cartContent {
	products: ProductCartItem[];
	quantity: number;
	total: number;
}

interface ProductPayload {
	product: ProductCartItem;
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
			state.total += payload.quantity * payload.product.price;
			const existItemIndex = state.products.findIndex(
				(item) =>
					item._id === payload.product._id &&
					item.color[0] === payload.product.color[0] &&
					item.size[0] === payload.product.size[0]
			);
			const existsItem = state.products[existItemIndex];

			if (existsItem) {
				state.products[existItemIndex].quantity += payload.quantity;
			} else {
				state.products.push(payload.product);
			}
			state.quantity += payload.quantity;
		},
	},
});

export const { addProduct } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.persistedItems.cart;
export default cartSlice.reducer;
