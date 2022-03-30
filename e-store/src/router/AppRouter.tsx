import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import ProductList from '../pages/ProductList';
import Register from '../pages/Register';

const AppRouter = () => {
	const user = true;
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="products/:category" element={<ProductList />} />
			<Route path="product/:_id" element={<Product />} />
			<Route path="cart" element={<Cart />} />
			<Route path="login" element={<Login />}></Route>
			<Route path="register" element={<Register />} />
		</Routes>
	);
};

export default AppRouter;
