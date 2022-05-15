import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home/Home';
import List from '../pages/list/List';
import Login from '../pages/login/Login';
import NewUser from '../pages/new/NewUser';
import User from '../pages/User/User';
import Layout from '../layout/Layout';
import ProductList from '../pages/productList/ProductList';

const AppRouter = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="users">
					<Route index element={<List />} />
					<Route path=":userId" element={<User />} />
					<Route path="new" element={<NewUser />} />
				</Route>
				<Route path="products">
					<Route index element={<ProductList />} />
					<Route path=":productsId" element={<User />} />
					<Route path="new" element={<NewUser />} />
				</Route>

				{/* <Route path="products">
					<Route index element={<List />} />
					<Route path=":productId" element={<Single />} />
					<Route path="new" element={<New />} />
				</Route> */}
			</Routes>
		</Layout>
	);
};

export default AppRouter;
