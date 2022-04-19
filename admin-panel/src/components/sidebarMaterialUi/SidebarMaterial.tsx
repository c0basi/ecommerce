import { Box, styled } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import FaceIcon from '@mui/icons-material/Face';
import Switch from '@mui/material/Switch';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ListSubheader from '@mui/material/ListSubheader';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

const StyledHeader = styled(ListSubheader)(() => ({
	backgroundColor: 'transparent',
	fontSize: '1rem',
}));

const SidebarMaterial = () => {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position="fixed">
				Left
				<nav aria-label="main mailbox folders">
					<List>
						<StyledHeader>Main</StyledHeader>
						<ListItem disablePadding>
							<ListItemButton href="#home">
								<ListItemIcon>
									<DashboardIcon />
								</ListItemIcon>
								<ListItemText primary="Dashboard" />
							</ListItemButton>
						</ListItem>
						<StyledHeader>LISTS</StyledHeader>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<PersonIcon />
								</ListItemIcon>
								<ListItemText primary="Users" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<StorefrontIcon />
								</ListItemIcon>
								<ListItemText primary="Products" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<PaymentIcon />
								</ListItemIcon>
								<ListItemText primary="Orders" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<LocalShippingIcon />
								</ListItemIcon>
								<ListItemText primary="Delivery" />
							</ListItemButton>
						</ListItem>
						<StyledHeader>USEFUL</StyledHeader>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<QueryStatsIcon />
								</ListItemIcon>
								<ListItemText primary="Stats" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<NotificationsIcon />
								</ListItemIcon>
								<ListItemText primary="Notifications" />
							</ListItemButton>
						</ListItem>
						<StyledHeader>SERVICE</StyledHeader>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<SettingsIcon />
								</ListItemIcon>
								<ListItemText primary="System Health" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<SettingsIcon />
								</ListItemIcon>
								<ListItemText primary="Logs" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<SettingsIcon />
								</ListItemIcon>
								<ListItemText primary="Settings" />
							</ListItemButton>
						</ListItem>
						<StyledHeader>USER</StyledHeader>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<LogoutIcon />
								</ListItemIcon>
								<ListItemText primary="Profile" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<LogoutIcon />
								</ListItemIcon>
								<ListItemText primary="Logout" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<ModeNightIcon />
								</ListItemIcon>
								<Switch />
							</ListItemButton>
						</ListItem>
					</List>
				</nav>
			</Box>
		</Box>
	);
};

export default SidebarMaterial;
