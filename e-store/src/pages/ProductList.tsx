import React from 'react';
import './ProductList.scss';

// importing NavBar and Annouincemen, make sure you add it to layout later to prevent double imports
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Products from '../components/Products/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer/Footer';

const ProductList = () => {
	return (
		<div>
			<Announcement />
			<NavBar />
			<h1 className="filter-classes">Dresses</h1>
			<div className="filter-container">
				<div className="filter-container__filter">
					<span className="filter-container__filter--text">
						Filter Products
					</span>
					<select>
						<option disabled selected>
							Color
						</option>
						<option>White</option> <option>Black</option>
						<option>Red</option>
						<option>Blue</option>
						<option>Green</option>
					</select>
					<select>
						<option disabled selected>
							Size
						</option>
						<option>XS</option> <option>S</option>
						<option>M</option>
						<option>L</option>
						<option>XL</option>
					</select>
				</div>
				<div className="filter-container__filter">
					<span className="filter-container__filter--text">Sort Products</span>
					<select>
						<option>Newest</option>
						<option>Price (asc)</option>
						<option>Price (desc)</option>
					</select>
				</div>
			</div>
			<Products />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default ProductList;
