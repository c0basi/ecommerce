import React from 'react';
import './App.css';
import Topbar from './components/topbar/topbar';
import Home from './pages/home/Home';
import AppRouter from './router/AppRouter';

function App() {
	return (
		<div>
			<AppRouter />
		</div>
	);
}

export default App;
