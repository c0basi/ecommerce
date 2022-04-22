import React from 'react';
import './Widget.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import { ShoppingCartOutlined } from '@mui/icons-material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { SvgIconTypeMap } from '@mui/material';

interface widgetProps {
	type: string;
}

interface Data {
	title: string;
	isMoney: Boolean;
	link: string;
	icon: JSX.Element;
}

const amount = 100;
const diff = 20;

const Widget = ({ type }: widgetProps) => {
	let data: Data = {} as Data;
	switch (type) {
		case 'user':
			data = {
				title: 'USERS',
				isMoney: false,
				link: 'See all users',
				icon: <PersonIcon />,
			};
			break;
		case 'order':
			data = {
				title: 'ORDERS',
				isMoney: false,
				link: 'View all orders',
				icon: <ShoppingCartOutlined />,
			};
			break;
		case 'earnings':
			data = {
				title: 'EARNINGS',
				isMoney: true,
				link: 'View net earnings',
				icon: <AttachMoneyIcon />,
			};
			break;
		case 'balance':
			data = {
				title: 'BALANCE',
				isMoney: true,
				link: 'See details',
				icon: <AccountBalanceWalletIcon />,
			};
			break;
		default:
			break;
	}

	return (
		<div className="widget">
			<div className="widget__left">
				<span className="widget__left--title">{data.title}</span>
				<span className="widget__left--counter">
					{data.isMoney && `${amount}`}
				</span>
				<span className="widget__left--link">{data.link}</span>
			</div>
			<div className="widget__right">
				<div className="widget__right--percentage positive">
					<ArrowDropUpIcon />
					{diff}%
				</div>
				<IconButton aria-label="person" color="secondary" className="icon">
					{data.icon}
				</IconButton>
			</div>
		</div>
	);
};

export default Widget;
