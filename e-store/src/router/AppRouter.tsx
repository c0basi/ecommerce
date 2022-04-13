import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import ProductList from '../pages/ProductList';
import Register from '../pages/Register';
import Success from '../pages/Success';
import { userSelector } from '../redux/user/userSlice';
import { useSelector } from 'react-redux';

const AppRouter = () => {
	const user = useSelector(userSelector).currentUser;
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="products" element={<ProductList />} />
			<Route path="products/:category" element={<ProductList />} />
			<Route path="product/:_id" element={<Product />} />
			<Route path="cart" element={<Cart />} />
			<Route
				path="login"
				element={user ? <Navigate to="/" /> : <Login />}
			></Route>
			<Route path="register" element={<Register />} />
			<Route path="success" element={<Success />}></Route>
		</Routes>
	);
};

export default AppRouter;
