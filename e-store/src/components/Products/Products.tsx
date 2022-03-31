import React, { useState, useEffect } from 'react';
import './Products.scss';
import { popularProducts } from '../../data/data';
import Product from '../Products/Product';
import axios from 'axios';
import { getAllProducts } from '../../redux/products/product-actions';
import { productsSelector } from '../../redux/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

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
	// const [products, setProducts] = useState<Product[]>([] as Product[]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>(
		[] as Product[]
	);
	console.log(cat, filters, sort);
	const dispatch = useDispatch();
	const getProduct = useSelector(productsSelector);
	const { products, loading, error } = getProduct;
	console.log(loading);

	// move this function somewhere esle
	// const getProducts = async () => {
	// 	try {
	// 		const res = await axios.get(
	// 			cat
	// 				? `http://localhost:5000/api/products/find?category=${cat}`
	// 				: 'http://localhost:5000/api/products/find'
	// 		);
	// 		console.log(res.data);
	// 		setProducts(res.data);
	// 	} catch (err) {}
	// };

	useEffect(() => {
		// getProducts();
		cat ? dispatch(getAllProducts(cat)) : dispatch(getAllProducts());
	}, [cat]);
	console.log('checking products');

	console.log(products);

	// color and size filter
	useEffect(() => {
		cat && filters && Object.keys(filters).length > 0
			? setFilteredProducts(
					products.filter(
						(item: Product) =>
							item.color.includes(filters.color?.toLowerCase()!) &&
							item.size.includes(filters.size!)
					)
			  )
			: setFilteredProducts(products);
	}, [products, cat, filters]);

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

	console.log('checking for the products to display');
	console.log(products);

	return (
		<div className="productsContainer">
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				[
					cat
						? filteredProducts.map((item) => (
								<Product item={item} key={item._id} />
						  ))
						: products
								.slice(0, 8)
								.map((item) => <Product item={item} key={item._id} />),
				]
			)}
		</div>
	);
};

export default Products;
