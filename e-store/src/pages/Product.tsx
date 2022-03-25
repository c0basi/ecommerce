import Announcement from '../components/Announcement';
import React from 'react';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import './Product.scss';
import CSS from 'csstype';

import jean from '../assets/jean-2.jpg';
import { Add, Remove } from '@mui/icons-material';

const bStyle: CSS.Properties = {
	backgroundColor: 'black',
};
const dStyle: CSS.Properties = {
	backgroundColor: 'darkblue',
};
const gStyle: CSS.Properties = {
	backgroundColor: 'grey',
};
const Product = () => {
	return (
		<div className="product-page__container">
			<Announcement />
			<NavBar />
			<div className="product-page__container--wrapper">
				<div className="product-page__container--wrapper__image">
					<img
						src={
							'https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
						}
						alt="jeans"
					/>
				</div>
				<div className="product-page__container--wrapper__info">
					<h2>Black Sweat Shirt</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
						exercitationem sit ipsa a quidem adipisci ratione praesentium earum
						explicabo cumque, deleniti, necessitatibus ipsam officiis inventore
						consequatur voluptatem atque illum voluptates.
					</p>
					<span className="price">$49.99</span>
					<div className="product-page__container--wrapper__info--filtercontainer">
						<div className="filterColors">
							<span className="filter-title">Color</span>
							<div className="filterColors__style" style={bStyle}></div>
							<div className="filterColors__style" style={dStyle}></div>
							<div className="filterColors__style" style={gStyle}></div>
						</div>
						<div>
							<span className="filter-title">Size</span>
							<select>
								<option disabled selected>
									{' '}
								</option>
								<option>XS</option> <option>S</option>
								<option>M</option>
								<option>L</option>
								<option>XL</option>
							</select>
						</div>
					</div>
					<div className="product-page__container--wrapper__info--addContainer">
						<div className="product-page__container--wrapper__info--addContainer__amount">
							<Remove />
							<span>1</span>
							<Add />
						</div>
						<button>ADD TO CART</button>
					</div>
				</div>
			</div>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Product;
