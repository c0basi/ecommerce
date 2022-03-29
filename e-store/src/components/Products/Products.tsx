import React from 'react';
import './Products.scss';
import { popularProducts } from '../../data/data';
import Product from '../Products/Product';

interface ProductsProps {
	cat: string;
	filters: object;
	sort: string;
}

const Products = ({ cat, filters, sort }: ProductsProps) => {
	console.log(cat, filters, sort);

	return (
		<div className="productsContainer">
			{popularProducts.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</div>
	);
};

export default Products;
