import React from 'react';
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
import { Badge, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Navbar = () => {
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
						>
							<AccountCircle />
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
