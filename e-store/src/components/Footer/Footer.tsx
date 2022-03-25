import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from '@mui/icons-material';
import React from 'react';
import './Footer.scss';
import payment from '../../assets/payment.png';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer--left">
				<h1 className="footer--left__title">CHARLES</h1>
				<p className="footer--left__description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rem
					cupiditate alias nostrum pariatur neque perferendis magnam, suscipit
					voluptatibus ratione magni quos. Eius magni id assumenda autem odio
					similique mollitia!
				</p>
				<div className="footer--left__socials">
					<div className="social-icon icon-1">
						<Facebook />
					</div>
					<div className="social-icon icon-2">
						<Twitter />
					</div>
					<div className="social-icon icon-3">
						<Instagram />
					</div>
					<div className="social-icon icon-4">
						<Pinterest />
					</div>
				</div>
			</div>
			<div className="footer-center">
				<h2 className="footer-center__title">Useful Links</h2>
				<ul className="footer--center__items">
					<li>Home</li>
					<li>Man Fashion</li>
					<li>Accessories</li>
					<li>Order Tracking</li>
					<li>Wishlist</li>
					<li>Cart</li>
					<li>Woman Fashion</li>
					<li>My Account</li>
					<li>Wishlist</li>
					<li>Terms</li>
				</ul>
			</div>
			<div className="footer--right">
				<h2 className="footer-right__title">Contact</h2>
				<div className="footer-right__contactDetails">
					<Room /> 501 Smyth Rd
				</div>
				<div className="footer-right__contactDetails">
					<Phone /> +1 289-921-6589
				</div>
				<div className="footer-right__contactDetails">
					<MailOutline /> charlesdev@gmail.com
				</div>
				<img src={payment} alt="payment options" />
			</div>
		</div>
	);
};

export default Footer;
