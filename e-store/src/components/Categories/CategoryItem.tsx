import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryItem.scss';
type categoryItem = {
	id: number;
	img: string;
	title: string;
	cat: string;
};

interface CategoryItemProps {
	item: categoryItem;
}

const CategoryItem = ({ item }: CategoryItemProps) => {
	return (
		<div className="category-container">
			<img src={item.img} />
			<div className="category-container__info">
				<h1 className="category-container__info--title">{item.title}</h1>
				<Link to={`products/${item.cat}`}>
					<button>SHOP NOW</button>
				</Link>
			</div>
		</div>
	);
};

export default CategoryItem;
