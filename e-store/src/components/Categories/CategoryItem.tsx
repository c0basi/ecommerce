import React from 'react';
import './CategoryItem.scss';
type categoryItem = {
	id: number;
	img: string;
	title: string;
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
				<button>SHOP NOW</button>
			</div>
		</div>
	);
};

export default CategoryItem;
