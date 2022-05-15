import BasicModal from '../../components/Modal/Modal';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarMaterial from '../../components/sidebarMaterialUi/SidebarMaterial';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import TableContent from '../../components/table/Table';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import { userData } from '../../data';
import LargeWidget from '../../components/largeWidget/LargeWidget';
import SmallWidget from '../../components/smallWidget/SmallWidget';

const Home = () => {
	const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 700);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});
	console.log(isDesktop);
	console.log(window.innerWidth);

	return (
		<div className="home">
			{/* {isDesktop && <Sidebar />} */}
			<div className="home--container">
				home container
				<FeaturedInfo />
				<div className="homeWidgets">
					<SmallWidget />
					<LargeWidget />
				</div>
			</div>
		</div>
	);
};

export default Home;
