import React from 'react';
import './NavBar.scss';
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import { cartSelector } from '../redux/cart/cartSlice';

const useStyles = makeStyles({
	badge: {
		fontSize: 12,
	},
});

const NavBar = () => {
	const quantity = useSelector(cartSelector).quantity;
	console.log(quantity);

	const classes = useStyles();
	return (
		<div className="navbar">
			<div className="navbar__wrapper">
				<div className="navbar__wrapper--left">
					<span>EN</span>
					<div className="navbar__wrapper--left__search">
						<input type="text" placeholder="search" />
						<Search style={{ color: 'gray', fontSize: 16 }} />
					</div>
				</div>
				<div className="navbar__wrapper--center">
					<h1>SHOP</h1>
				</div>
				<div className="navbar__wrapper--right">
					<div className="navbar__wrapper--right__menu">REGISTER</div>
					<div className="navbar__wrapper--right__menu">SIGN IN</div>
					<div className="navbar__wrapper--right__menu">
						<Link to={'/cart'}>
							<Badge
								badgeContent={quantity}
								color="primary"
								classes={{ badge: classes.badge }}
							>
								<ShoppingCartOutlinedIcon className="shopping-icon" />
							</Badge>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
