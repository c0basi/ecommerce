import React from 'react';
import './Widget.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';

const Widget = () => {
	return (
		<div className="widget">
			<div className="widget__left">
				<span className="widget__left--title">USERS</span>
				<span className="widget__left--counter">21312</span>
				<span className="widget__left--link">See all users</span>
			</div>
			<div className="widget__right">
				<div className="widget__right--percentage positive">
					<ArrowDropUpIcon />
					20%
				</div>
				<PersonIcon />
			</div>
		</div>
	);
};

export default Widget;
