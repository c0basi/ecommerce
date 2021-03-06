import { createAsyncThunk } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { publicRequest } from '../../utils/requestMethods';

export const getAllProducts = createAsyncThunk(
	'/product/find',
	async (cat?: string) => {
		console.log('strting');

		try {
			if (typeof cat !== 'undefined') {
				const res = await publicRequest.get(`/products/find/?category=${cat}`);
				const data = res.data;
				console.log(data);
				return data;
			} else {
				console.log('working on it ');
				const res = await publicRequest.get('/products/find/');
				console.log('got it ');
				const data = res.data;
				console.log(data);
				return data;
			}
		} catch (err) {
			console.log(err);
			throw new Error('Something went wrong...');
		}
	}
);

export const getProduct = createAsyncThunk(
	'/product/find?id',
	async (id: string) => {
		try {
			console.log('product data');
			const res = await publicRequest.get('/products/find/' + id);
			console.log('working');
			res && console.log(res.data);
			console.log('got it ');
			return res.data;
		} catch (err) {
			console.log('something went wrong with the request');
			console.log(err);
			return { errorMessage: err };
		}
	}
);
