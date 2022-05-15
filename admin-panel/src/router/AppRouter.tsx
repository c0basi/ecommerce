import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home/Home';
import List from '../pages/list/List';
import Login from '../pages/login/Login';
import New from '../pages/new/New';
import Single from '../pages/single/Single';
import Layout from '../layout/Layout';

const AppRouter = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="users">
					<Route index element={<List />} />
					<Route path=":userId" element={<Single />} />
					<Route path="new" element={<New />} />
				</Route>
				<Route path="products">
					<Route index element={<List />} />
					<Route path=":productId" element={<Single />} />
					<Route path="new" element={<New />} />
				</Route>
			</Routes>
		</Layout>
	);
};

export default AppRouter;
