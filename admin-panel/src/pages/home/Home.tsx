import React from 'react';
import BasicModal from '../../components/Modal/Modal';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarMaterial from '../../components/sidebarMaterialUi/SidebarMaterial';
import './Home.scss';

const Home = () => {
	return (
		<div className="home">
			{/* <Sidebar /> */}
			<div className="home__container">
				<div className="hamburger_for_dash">
					<BasicModal>
						<Sidebar />
					</BasicModal>
				</div>
			</div>
		</div>
	);
};

export default Home;
