import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Featured.scss';

import MoreVertIcon from '@mui/icons-material/MoreVert';
const Featured = () => {
	return (
		<div className="featured">
			<div className="featured__top">
				<h1 className="title">Total Revenue</h1>
				<MoreVertIcon />
			</div>
			<div className="featured__bottom">
				<div className="featured__bottom--chart">
					<CircularProgressbar value={70} text="70" strokeWidth={4} />
				</div>
				<p className="featured__bottom--title">Total sales made today</p>
				<p className="featured__bottom--amount">$420</p>
				<p className="featured__bottom--desc">
					Previous transactions processing. Last payments may not be included.
				</p>

				<div className="featured__bottom--summary">
					<div className="item">
						<div className="itemTitle">Target</div>
						<div className="itemResult">
							<ArrowDropDownIcon />
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
