import React from 'react';
import './LargeWidget.scss';
import Table from '../table/Table';

const LargeWidget = () => {
	return (
		<div className="widgetLarge">
			<h3 className="widgetLarge--title">Latest Transactions</h3>
			<Table />
		</div>
	);
};

export default LargeWidget;
