import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import './CartItem.scss';

interface cartItemProps {
	title: string;
	id: string;
	size: string;
	img: string;
	quantity: number;
	price: number;
	itemColor: string;
}

const cartStyles = (c: string) => ({
	backgroundColor: `${c}`,
});

const CartItem = ({
	title,
	id,
	size,
	price,
	quantity,
	img,
	itemColor,
}: cartItemProps) => {
	return (
		<div className="cartitem">
			<div className="cartItem__image">
				<img src={img} alt="shoe" />
			</div>
			<div className="cartitem__details">
				<span>
					<b>Product:</b>
				</span>
				<span> {title}</span>
				<span>ID: {id}</span>
				<div
					className="cartitem__details--color"
					style={cartStyles(itemColor)}
				></div>
				<span>Size: {size}</span>
			</div>
			<div className="cartitem__actions">
				<Add />
				<span>{quantity}</span>
				<Remove />
			</div>
			<div className="cartitem__price">${price}</div>
			{/* <div className="cart-container__wrapper--bottom__info--product__detail">
        <img
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
            alt="shoe"
        />
        <div className="cart-container__wrapper--bottom__info--product__detail--details">
            <span>Product: JESSE THUNDER SHOES</span>
            <span>ID: 98909889</span>
            <div className="cart-container__wrapper--bottom__info--product__detail--details__color"></div>
            <span>Size: 37.5</span>
        </div>
    </div>
    <div className="cart-container__wrapper--bottom__info--price__detail">
        <div className="cart-container__wrapper--bottom__info--price__detail--container">
            <Add />
            <span>2</span>
            <Remove />
        </div>
        <div className="cart-container__wrapper--bottom__info--price__detail--price">
            $99
        </div>
    </div> */}
		</div>
	);
};

export default CartItem;
