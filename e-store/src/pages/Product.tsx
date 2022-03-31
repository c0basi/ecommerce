import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import { ProductItem } from '../components/Products/ProductType';
import { addProduct } from '../redux/cart/cartSlice';
import { getProduct as getProductItem } from '../redux/products/product-actions';
import { productSelector } from '../redux/products/productSlice';
import './Product.scss';

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
	const getProduct = useSelector(productSelector);
	const { product: productItem, loading, error } = getProduct;
	const id = location.pathname.split('/')[2];

	// const getProduct = useCallback(async () => {
	// 	try {
	// 		console.log('product data');
	// 		const res = await publicRequest.get('/products/find/' + id);
	// 		console.log('working');
	// 		res && setProduct(res.data);
	// 		console.log('got it ');
	// 	} catch (err) {
	// 		console.log('something went wrong with the request');
	// 	}
	// }, [id]);

	// useEffect(() => {
	// 	getProduct();
	// }, [getProduct]);

	useEffect(() => {
		dispatch(getProductItem(id));
	}, [dispatch, id]);

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
				product: {
					...productItem,
					color: [color],
					size: [size],
					quantity: quantity,
				},
				quantity,
			})
		);
	};

	return (
		<div className="product-page__container">
			<Announcement />
			<NavBar />
			<div className="product-page__container--wrapper">
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h2>{error}</h2>
				) : (
					<>
						<div className="product-page__container--wrapper__image">
							<img src={productItem.img} alt="jeans" />
						</div>
						<div className="product-page__container--wrapper__info">
							<h2>{productItem.title}</h2>
							<p>{productItem.desc}</p>
							<span className="price">${productItem.price}</span>
							<div className="product-page__container--wrapper__info--filtercontainer">
								<div className="filterColors">
									<span className="filter-title">Color</span>
									{/*  remove this and add a approved message */}
									{productItem.color?.map((color) => (
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
										{productItem.size?.map((size) => (
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
					</>
				)}
			</div>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Product;
