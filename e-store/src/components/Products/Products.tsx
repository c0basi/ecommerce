import React, { useState, useEffect } from 'react';
import './Products.scss';
import { popularProducts } from '../../data/data';
import Product from '../Products/Product';
import axios from 'axios';

interface ProductsProps {
	cat?: string;
	filters?: Filter;
	sort?: string;
}

type Filter = {
	color?: string;
	size?: string;
};
type Product = {
	categories: Array<string>;
	color: Array<string>;
	createdAt: string;
	desc: string;
	img: string;
	instock: boolean;
	price: number;
	size: Array<string>;
	title: string;
	updatedAt: string;
	__v: string;
	_id: string;
};

const Products = ({ cat, filters, sort }: ProductsProps) => {
	const [products, setProducts] = useState<Product[]>([] as Product[]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>(
		[] as Product[]
	);
	console.log(cat, filters, sort);

	// move this function somewhere esle
	const getProducts = async () => {
		try {
			const res = await axios.get(
				cat
					? `http://localhost:5000/api/products?category=${cat}`
					: 'http://localhost:5000/api/products'
			);
			console.log(res.data);
			setProducts(res.data);
		} catch (err) {}
	};

	useEffect(() => {
		getProducts();
	}, [cat]);

	// color and size filter
	useEffect(() => {
		console.log('filters');
		cat &&
			filters &&
			setFilteredProducts(
				products.filter(
					(item: Product) =>
						item.color.includes(filters.color?.toLowerCase()!) &&
						item.size.includes(filters.size!)
				)
			);
	}, [products, cat, filters]);
	console.log(filteredProducts);

	// sort filter
	useEffect(() => {
		if (sort === 'newest') {
			setFilteredProducts((prev) =>
				[...prev].sort(
					(a, b) => +new Date(a.createdAt) - +new Date(b.createdAt)
				)
			);
		} else if (sort === 'asc') {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.price - b.price)
			);
		} else {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);

	return (
		<div className="productsContainer">
			{cat
				? filteredProducts.map((item) => <Product item={item} key={item._id} />)
				: products.map((item) => <Product item={item} key={item._id} />)}
		</div>
	);
};

export default Products;
