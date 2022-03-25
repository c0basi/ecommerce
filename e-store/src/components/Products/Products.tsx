import React from 'react';
import './Products.scss';
import { popularProducts } from '../../data/data';
import Product from '../Products/Product';

const Products = () => {
	return (
		<div className="productsContainer">
			{popularProducts.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</div>
	);
};

export default Products;
