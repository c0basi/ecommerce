// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ProductItem } from '../../components/Products/ProductType';
// import { RootState } from '../../redux/store';
// import { getAllProducts } from './product-actions';

// interface productsContent {
// 	products: ProductItem[];
// 	loading: boolean;
// 	error: string;
// }

// const initialState: productsContent = {
// 	products: [] as ProductItem[],
// 	loading: false,
// 	error: '',
// };

// const productsSlice = createSlice({
// 	name: 'products',
// 	initialState: initialState,
// 	reducers: {},
// 	extraReducers: (builder) => {
// 		builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
// 			state.products = payload;
// 			console.log(payload);

// 			state.loading = false;
// 		});
// 		builder.addCase(getAllProducts.pending, (state, { payload }) => {
// 			state.loading = true;
// 		});
// 		builder.addCase(getAllProducts.rejected, (state, action) => {
// 			state.error = 'Something went wrong';
// 		});
// 	},
// });

// export const productActions = productsSlice.actions;
// export const productsSelector = (state: RootState) => state.products;
// export default productsSlice.reducer;

export {};
