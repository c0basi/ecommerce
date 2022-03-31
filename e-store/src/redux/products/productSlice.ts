import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from '../../components/Products/ProductType';
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
			(state.product = payload), (state.loading = false);
		});
		builder.addCase(getProduct.pending, (state, { payload }) => {
			state.loading = true;
		});
		builder.addCase(getProduct.rejected, (state, action) => {
			if (action.payload as errorType) {
				// Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
				state.error = 'Something went wrong'; // this needs fixing. Unknown errors
			} else {
				state.error = 'something went wrong';
			}
		});
	},
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
