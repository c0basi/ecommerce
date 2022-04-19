import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarMaterial from '../../components/sidebarMaterialUi/SidebarMaterial';
import './Home.scss';

const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<div className="home__container">container</div>
		</div>
	);
};

export default Home;
