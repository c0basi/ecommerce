import React from 'react';
import './SmallWidget.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { User } from '../../types/DataTypes';
import { styled } from '@mui/material';
import { getAllUsers } from '../../redux/user/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../redux/user/usersSlice';
import { AppDispatch } from '../../redux/store';

const SmallWidget = () => {
	const dispatch: AppDispatch = useDispatch();
	const [allUsers, setallUsers] = useState<User[]>([]);
	const { users, loading, error } = useSelector(usersSelector);
	useEffect(() => {
		dispatch(getAllUsers());
		setallUsers(users);
	}, []);
	const SmallWidgetButton = styled(Button)({
		backgroundColor: '#eeeef7',
		color: '#555',
		border: 'none',
	});
	console.log('error');

	return (
		<div className="widgetSmall">
			<div className="widgetSmall--title">New Join Members</div>
			{loading ? (
				<h1>Loading....</h1>
			) : error ? (
				<h1>Error</h1>
			) : (
				<>
					<ul className="widgetSmall--list">
						{users.map((user) => (
							<li className="widgetSmall--list__item" key={user._id}>
								<img
									src={
										user.img ||
										'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
									}
									alt=""
									className="widgetSmImg"
								/>
								<div className="widgetSmUser">
									<span className="widgetSmUsername">{user.username}</span>
								</div>
								<SmallWidgetButton
									variant="outlined"
									startIcon={<VisibilityIcon />}
									size={'small'}
								>
									Display
								</SmallWidgetButton>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default SmallWidget;
