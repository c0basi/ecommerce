import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from '../../components/Products/ProductType';
import { RootState } from '../store';
import { getProduct } from './product-actions';

interface productContent {
	product: ProductItem;
	loading: boolean;
	error: string;
}
interface errorType {
	errorMessage: string;
}
const initialState: productContent = {
	product: {} as ProductItem,
	loading: false,
	error: '',
};

const productSlice = createSlice({
	name: 'products',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProduct.fulfilled, (state, { payload }) => {
			state.product = payload;
			state.loading = false;
		});
		builder.addCase(getProduct.pending, (state, { payload }) => {
			state.loading = true;
		});
		builder.addCase(getProduct.rejected, (state, action) => {
			state.error = 'Something went wrong';
		});
	},
});

export const productActions = productSlice.actions;
export const productSelector = (state: RootState) => state.product;
export default productSlice.reducer;
