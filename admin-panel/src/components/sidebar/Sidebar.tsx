import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import FaceIcon from '@mui/icons-material/Face';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import './Sidebar.scss';
import { Switch } from '@mui/material';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<span className="sidebar__top--logo">charles admin</span>
			</div>
			<hr />
			<div className="sidebar__center">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<DashboardIcon />
						<span>Dashboard</span>
					</li>
					<p className="title">LISTS</p>
					<li>
						<PersonIcon />
						<span>Users</span>
					</li>
					<li>
						<StorefrontIcon />
						<span>Products</span>
					</li>
					<li>
						<PaymentIcon />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon />
						<span>Delivery</span>
					</li>
					<p className="title">USEFUL</p>
					<li>
						<QueryStatsIcon />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsIcon />
						<span>Notifications</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<SettingsSystemDaydreamIcon />
						<span>System Health</span>
					</li>
					<li>
						<PsychologyIcon />
						<span>Logs</span>
					</li>
					<li>
						<SettingsIcon />
						<span>Settings</span>
					</li>
					<p className="title">USER</p>
					<li>
						<FaceIcon />
						<span>Profile</span>
					</li>
					<li>
						<LogoutIcon />
						<span>Logout</span>
					</li>
					<p className="title">THEME</p>
				</ul>
			</div>
			<div className="sidebar__bottom">
				<ListItemButton>
					<ListItemIcon>
						<ModeNightIcon />
					</ListItemIcon>
					<Switch />
				</ListItemButton>
			</div>
		</div>
	);
};

export default Sidebar;
