import React from 'react';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import CartItem from './components/cart/CartItem';
import AppRouter from './router/AppRouter';
import './App.scss';

function App() {
	return (
		<div>
			<AppRouter />
		</div>
	);
}

export default App;
