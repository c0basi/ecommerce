import React, { useState } from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import BasicModal from '../Modal/Modal';
import Sidebar from '../sidebar/Sidebar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, IconButton, styled, Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MoreIcon from '@mui/icons-material/MoreVert';

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	alignItems: 'center',
	gap: '20px',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}));

const Navbar = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		React.useState<null | HTMLElement>(null);
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
		console.log('clicked');
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id="demo-positioned-menu"
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size="large" aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="error">
						<ChatBubbleOutlineIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
				>
					<Badge badgeContent={17} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem>
				<Avatar onClick={handleClick} alt="Remy Sharp" />
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);
	return (
		<div className="navbar">
			<div className="hamburger_for_dash">
				<BasicModal>
					<Sidebar />
				</BasicModal>
			</div>
			<div className="navbar__wrapper">
				<div className="navbar__wrapper--search">
					<input type="text" placeholder="Search..." />
					<SearchIcon />
				</div>
				<div className="navbar__wrapper--items">
					<div className="navbar__wrapper--items__item">
						<LanguageIcon />
						English
					</div>
					<div className="navbar__wrapper--items__item">
						<DarkModeIcon />
					</div>
					<div className="navbar__wrapper--items__item">
						<FullscreenExitIcon />
					</div>
					<div className="navbar__wrapper--items__item">
						<Badge badgeContent={17} color="error">
							<NotificationsIcon />
						</Badge>
					</div>
					<div className="navbar__wrapper--items__item">
						<Badge badgeContent={12} color="error">
							<ChatBubbleOutlineIcon />
						</Badge>
					</div>
					<div className="navbar__wrapper--items__item">
						<ListIcon />
					</div>
					<div className="navbar__wrapper--items__item">
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="primary-search-account-menu"
							aria-haspopup="true"
							color="inherit"
							onClick={handleClick}
						>
							<AccountCircle />
						</IconButton>
					</div>
				</div>
				<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
					<IconButton
						size="large"
						aria-label="show more"
						aria-controls={mobileMenuId}
						aria-haspopup="true"
						onClick={handleMobileMenuOpen}
						color="inherit"
					>
						<MoreIcon />
					</IconButton>
				</Box>
				{renderMobileMenu}
				{renderMenu}
			</div>
		</div>
	);
};

export default Navbar;
