import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './List.scss';
import Datatable from '../../components/datatable/Datatable';

const List = () => {
	return (
		<div className="list">
			<div className="list--container">
				<Datatable />
			</div>
		</div>
	);
};

export default List;
