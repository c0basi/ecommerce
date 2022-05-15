import React from 'react';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import './User.scss';

const User = () => {
	return (
		<div className="user">
			<div className="user--titleContainer">
				<h1 className="user--titleContainer__title">Edit User</h1>
				<Link to="/newUser">
					<button className="userAddButton">Create</button>
				</Link>
			</div>
			<div className="user--container">
				<div className="user--container__show">
					<div className="user--container__show--top">
						<img
							src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
							className="userShowImg"
						/>
						<div className="user--container__show--top__title">
							<span className="userShowUsername">Anna Becker</span>
							<span className="userShowUserTitle">Software Engineer</span>
						</div>
					</div>
					<div className="user--container__show--bottom">
						<span className="userShowTitle">Account Details</span>
						<div className="user--container__show--bottom__info">
							<PermIdentityIcon className="userShowIcon" />
							<span className="userShowInfoTitle">annabeck99</span>
						</div>
						<div className="user--container__show--bottom__info">
							<CalendarTodayIcon className="userShowIcon" />
							<span className="userShowInfoTitle">10.12.1999</span>
						</div>
						<span className="userShowTitle">Contact Details</span>
						<div className="user--container__show--bottom__info">
							<PhoneAndroidIcon className="userShowIcon" />
							<span className="userShowInfoTitle">+1 123 456 67</span>
						</div>
						<div className="user--container__show--bottom__info">
							<MailOutlineIcon className="userShowIcon" />
							<span className="userShowInfoTitle">annabeck99@gmail.com</span>
						</div>
						<div className="user--container__show--bottom__info">
							<LocationSearchingIcon className="userShowIcon" />
							<span className="userShowInfoTitle">New York | USA</span>
						</div>
					</div>
				</div>
				<div className="user--container__update">
					<span className="user--container__update--title">Edit</span>
					<form className="user--container__update--form">
						<div className="user--container__update--form__left">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									type="text"
									placeholder="annabeck99"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Full Name</label>
								<input
									type="text"
									placeholder="Anna Becker"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Email</label>
								<input
									type="text"
									placeholder="annabeck99@gmail.com"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Phone</label>
								<input
									type="text"
									placeholder="+1 123 456 67"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Address</label>
								<input
									type="text"
									placeholder="New York | USA"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="user--container__update--form__right">
							<div className="user--container__update--form__right--upload">
								<img
									className="userUpdateImg"
									src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									alt=""
								/>
								<label htmlFor="file">
									<PublishIcon className="userUpdateIcon" />
								</label>
								<input type="file" id="file" style={{ display: 'none' }} />
							</div>
							<button className="user--container__update--form__right--upload__button">
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default User;
