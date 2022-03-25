import { Send } from '@mui/icons-material';
import React from 'react';

import './Newsletter.scss';
const Newsletter = () => {
	return (
		<div className="newsletterContainer">
			<h1 className="newsletterContainer--title">Newsletter</h1>
			<p className="newsletterContainer--description">
				Get timely updates from your favorite products
			</p>
			<div className="newsletterContainer--input">
				<input type="text" placeholder="your email" />
				<button>
					<Send />
				</button>
			</div>
		</div>
	);
};

export default Newsletter;
