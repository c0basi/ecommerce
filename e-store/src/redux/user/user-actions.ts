import { createAsyncThunk } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { publicRequest } from '../../utils/requestMethods';

export const login = createAsyncThunk('/auth//login', async (loginDetails) => {
	console.log('logging in ');

	try {
		console.log('working on it ');
		const res = await publicRequest.post('/auth//login/', loginDetails);
		console.log('got it ');
		const data = res.data;
		console.log(data);
		return data;
	} catch (err) {
		console.log(err);
		throw new Error('Something went wrong...');
	}
});

// export const getProduct = createAsyncThunk(
// 	'/product/find?id',
// 	async (id: string) => {
// 		try {
// 			console.log('product data');
// 			const res = await publicRequest.get('/products/find/' + id);
// 			console.log('working');
// 			res && console.log(res.data);
// 			console.log('got it ');
// 			return res.data;
// 		} catch (err) {
// 			console.log('something went wrong with the request');
// 			console.log(err);
// 			return { errorMessage: err };
// 		}
// 	}
// );
