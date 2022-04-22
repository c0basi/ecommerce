import BasicModal from '../../components/Modal/Modal';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarMaterial from '../../components/sidebarMaterialUi/SidebarMaterial';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Home.scss';

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
			</div>
		</div>
	);
};

export default Home;
