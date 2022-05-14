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
import FeaturedInfo from '../../components/featuredInfo.tsx/FeaturedInfo';
import { userData } from '../../data';

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
			{isDesktop && <Sidebar />}
			<div className="home__container">
				{/* <div className="hamburger_for_dash">
					<BasicModal>
						<Sidebar />
					</BasicModal>
				</div> */}
				<Navbar />
				home container
				<FeaturedInfo />
				<div className="widgets">
					{/* <Widget type="user" />
					<Widget type="order" />
					<Widget type="earnings" />
					<Widget type="balance" /> */}
				</div>
				<Chart
					data={userData}
					title=" User Analytics"
					dataKey="Active User"
					grid
				/>
				<div className="charts">
					{/* <Featured />
					<Chart /> */}
				</div>
				<div className="listContainer">
					<div className="listContainer--title">Latest Transactions</div>
					<TableContent />
				</div>
			</div>
		</div>
	);
};

export default Home;
