import Publish from '@mui/icons-material/Publish';
import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../data';
import './Product.scss';

const Product = () => {
	return (
		<div className="product">
			<div className="product--TitleContainer">
				<h1 className="product--TitleContainer__title">Product</h1>
				<Link to="/products/new">
					<button className="productAddButton">Create</button>
				</Link>
			</div>
			<div className="product__top">
				<div className="product__top--left">
					<Chart data={productData} dataKey="Sales" title="Sales Performance" />
				</div>
				<div className="product__top--right">
					<div className="product__top--right__info">
						<img
							src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
							className="productInfoImg"
						/>
						<span className="productName">Apple Airpods</span>
					</div>
					<div className="product__top--right__bottom">
						<div className="productInfoItem">
							<span className="productInfoKey">id:</span>
							<span className="productInfoValue">123</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">sales:</span>
							<span className="productInfoValue">5123</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">active:</span>
							<span className="productInfoValue">yes</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">in stock:</span>
							<span className="productInfoValue">no</span>
						</div>
					</div>
				</div>
			</div>
			<div className="product__bottom">
				<form className="product__bottom--form">
					<div className="product__bottom--form__left">
						<label>Product Name</label>
						<input type="text" placeholder="Apple AirPod" />
						<label>In Stock</label>
						<select name="inStock" id="idStock">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
						<label>Active</label>
						<select name="active" id="active">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div className="product__bottom--form__right">
						<div className="product__bottom--form__right--upload">
							<img
								src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								alt=""
								className="productUploadImg"
							/>
							<label htmlFor="file">
								<Publish />
							</label>
							<input type="file" id="file" style={{ display: 'none' }} />
						</div>
						<button className="product__bottom--form__right--button">
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Product;
