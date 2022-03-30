import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from './ProductType';
import './Product.scss';

// type ProductItem = {
// 	categories: Array<string>;
// 	color: Array<string>;
// 	createdAt: string;
// 	desc: string;
// 	img: string;
// 	instock: boolean;
// 	price: number;
// 	size: Array<string>;
// 	title: string;
// 	updatedAt: string;
// 	__v: string;
// 	_id: string;
// };
// type ProductItem = {
// 	// find a way to rename this
// 	_id: string;
// 	img: string;
// };

interface productProps {
	item: ProductItem;
}

const Product = ({ item }: productProps) => {
	return (
		<div className="productContainer">
			<div className="productContainer--circle"></div>
			<img src={item.img} alt="" />
			<div className="productContainer--info">
				``
				<div className="productContainer--info__icon">
					<ShoppingCartOutlined />
				</div>
				<Link to={`/product/${item._id}`}>
					<div className="productContainer--info__icon">
						<SearchOutlined />
					</div>
				</Link>
				<div className="productContainer--info__icon">
					<FavoriteBorderOutlined />
				</div>
			</div>
		</div>
	);
};

export default Product;
