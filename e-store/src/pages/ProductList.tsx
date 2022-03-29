import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductList.scss';

// importing NavBar and Annouincemen, make sure you add it to layout later to prevent double imports
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Products from '../components/Products/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer/Footer';

type Filter = {
	color?: string;
	size?: string;
};

const ProductList = () => {
	const location = useLocation();
	const [filters, setFilter] = useState<Filter>({} as Filter);
	const [sort, setSort] = useState('newest');
	const cat = location.pathname.split('/')[2];
	console.log(cat);
	const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		setFilter({
			...filters,
			[event.target.name]: value,
		});
	};
	console.log(filters);
	console.log(typeof filters);

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
					<select name="color" onChange={handleFilter}>
						<option disabled>Color</option>
						<option>White</option> <option>Black</option>
						<option>Red</option>
						<option>Blue</option>
						<option>Green</option>
					</select>
					<select name="size" onChange={handleFilter}>
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
					<select
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
							setSort(e.target.value)
						}
					>
						<option value="newest">Newest</option>
						<option value="asc">Price (asc)</option>
						<option value="desc">Price (desc)</option>
					</select>
				</div>
			</div>
			<Products cat={cat} filters={filters} sort={sort} />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default ProductList;
