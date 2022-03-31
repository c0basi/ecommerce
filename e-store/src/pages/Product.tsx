import Announcement from '../components/Announcement';
import React, { useEffect, useState, useCallback } from 'react';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import './Product.scss';
import CSS from 'csstype';
import { ProductItem } from '../components/Products/ProductType';
import { useDispatch } from 'react-redux';

import jean from '../assets/jean-2.jpg';
import { Add, Remove } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../utils/requestMethods';
import axios from 'axios';
import { addProduct } from '../redux/cart/cartSlice';

// const bStyle: CSS.Properties = {
// 	backgroundColor: 'black',
// };
// const dStyle: CSS.Properties = {
// 	backgroundColor: 'darkblue',
// };
// const gStyle: CSS.Properties = {
// 	backgroundColor: 'grey',
// };

const filterStyles = (color: string) => ({
	backgroundColor: `${color}`,
});
const Product = () => {
	const [product, setProduct] = useState<ProductItem>({} as ProductItem);
	const [quantity, setQuantity] = useState(1);
	const [size, setSize] = useState('');
	const [color, setColor] = useState('');
	const dispatch = useDispatch();
	const location = useLocation();
	const id = location.pathname.split('/')[2];

	const getProduct = useCallback(async () => {
		try {
			console.log('product data');
			const res = await publicRequest.get('/products/find/' + id);
			console.log('working');
			res && setProduct(res.data);
			console.log('got it ');
		} catch (err) {
			console.log('something went wrong with the request');
		}
	}, [id]);

	useEffect(() => {
		getProduct();
	}, [getProduct]);

	const handleQuantity = (type: string) => {
		if (type === 'inc') {
			setQuantity((prev) => prev + 1);
		} else if (type == 'dec') {
			quantity > 0 && setQuantity((prev) => prev - 1);
		}
	};

	const handleClick = () => {
		dispatch(
			addProduct({
				product: { ...product, color: [color], size: [size] },
				quantity,
			})
		);
	};

	return (
		<div className="product-page__container">
			<Announcement />
			<NavBar />
			<div className="product-page__container--wrapper">
				<div className="product-page__container--wrapper__image">
					<img src={product.img} alt="jeans" />
				</div>
				<div className="product-page__container--wrapper__info">
					<h2>{product.title}</h2>
					<p>{product.desc}</p>
					<span className="price">${product.price}</span>
					<div className="product-page__container--wrapper__info--filtercontainer">
						<div className="filterColors">
							<span className="filter-title">Color</span>
							{/*  remove this and add a approved message */}
							{product.color?.map((color) => (
								<div
									onClick={() => setColor(color)}
									className="filterColors__style"
									style={filterStyles(color)}
									key={color}
								></div>
							))}

							{/* <div className="filterColors__style" style={dStyle}></div>
							<div className="filterColors__style" style={gStyle}></div> */}
						</div>
						<div>
							<span className="filter-title">Size</span>
							<select
								onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
									setSize(e.target.value)
								}
							>
								<option disabled selected>
									{' '}
								</option>
								{product.size?.map((size) => (
									<option key={size} value={size}>
										{size}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="product-page__container--wrapper__info--addContainer">
						<div className="product-page__container--wrapper__info--addContainer__amount">
							<Remove onClick={() => handleQuantity('dec')} />
							<span>{quantity}</span>
							<Add onClick={() => handleQuantity('inc')} />
						</div>
						<button onClick={() => handleClick()}>ADD TO CART</button>
					</div>
				</div>
			</div>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Product;
