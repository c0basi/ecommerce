import React from 'react';
import './SmallWidget.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const SmallWidget = () => {
	const SmallWidgetButton = styled(Button)({
		backgroundColor: '#eeeef7',
		color: '#555',
		border: 'none',
	});
	return (
		<div className="widgetSmall">
			<div className="widgetSmall--title">New Join Members</div>
			<ul className="widgetSmall--list">
				<li className="widgetSmall--list__item">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					{/* <button className="widgetSmButton">
						<VisibilityIcon className="widgetSmIcon" />
						Display
					</button> */}
					<SmallWidgetButton
						variant="outlined"
						startIcon={<VisibilityIcon />}
						size={'small'}
					>
						Display
					</SmallWidgetButton>
				</li>
				<li className="widgetSmall--list__item">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<SmallWidgetButton
						variant="outlined"
						startIcon={<VisibilityIcon />}
						size={'small'}
					>
						Display
					</SmallWidgetButton>
				</li>
				<li className="widgetSmall--list__item">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					{/* <button className="widgetSmButton">
						<VisibilityIcon className="widgetSmIcon" />
						Display
					</button> */}
					<SmallWidgetButton
						variant="outlined"
						startIcon={<VisibilityIcon />}
						size={'small'}
					>
						Display
					</SmallWidgetButton>
				</li>
				<li className="widgetSmall--list__item">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<SmallWidgetButton
						variant="outlined"
						startIcon={<VisibilityIcon />}
						size={'small'}
					>
						Display
					</SmallWidgetButton>
					{/* <button className="widgetSmButton">
						<VisibilityIcon className="widgetSmIcon" />
						Display
					</button> */}
				</li>
				<li className="widgetSmall--list__item">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<SmallWidgetButton
						variant="outlined"
						startIcon={<VisibilityIcon />}
						size={'small'}
					>
						Display
					</SmallWidgetButton>
					{/* <button className="widgetSmButton">
						<VisibilityIcon className="widgetSmIcon" />
						Display
					</button> */}
				</li>
			</ul>
		</div>
	);
};

export default SmallWidget;
