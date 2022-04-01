import React from 'react';
import { Link } from 'react-router-dom';
import './Success.scss';

const Success = () => {
	return (
		<div className="success-container">
			<div className="success-container__items">
				<div className="success-container__items--title">Success!</div>
				<h3>
					<Link to="/">Continue Shopping</Link>
				</h3>
			</div>
		</div>
	);
};

export default Success;
