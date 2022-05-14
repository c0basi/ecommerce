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
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SummarizeIcon from '@mui/icons-material/Summarize';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ForumIcon from '@mui/icons-material/Forum';
import ReportIcon from '@mui/icons-material/Report';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<span className="sidebar__top--logo">charles admin</span>
			</div>
			<hr />
			<div className="sidebar__center">
				<ul>
					<p className="title">Dashboard</p>
					<li>
						<DashboardIcon />
						<span>Home</span>
					</li>
					<li>
						<TimelineIcon />
						<span>Analytics</span>
					</li>
					<li>
						<TrendingUpIcon />
						<span>Sales</span>
					</li>
					<p className="title">Quick Menu</p>
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
						<span>Transactins</span>
					</li>
					<li>
						<SummarizeIcon />
						<span>Reports</span>
					</li>
					<p className="title">Notifications</p>
					<li>
						<MailOutlineIcon />
						<span>Mail</span>
					</li>
					<li>
						<DynamicFeedIcon />
						<span>Feedback</span>
					</li>
					<li>
						<ForumIcon />
						<span>Messages</span>
					</li>
					<p className="title">Staff</p>
					<li>
						<ManageAccountsIcon />
						<span>Manage</span>
					</li>
					<li>
						<QueryStatsIcon />
						<span>Analytics</span>
					</li>
					<li>
						<ReportIcon />
						<span>Reports</span>
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
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
