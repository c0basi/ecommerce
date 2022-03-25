import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar';
import CartItem from '../components/cart/CartItem';
import './Cart.scss';

const Cart = () => {
	return (
		<div className="cart-container">
			<NavBar />
			<Announcement />
			<div className="cart-container__wrapper">
				<h1 className="cart-container__wrapper--title">YOUR BAG</h1>
				<div className="cart-container__wrapper--top">
					<button className="continue-button">CONTINUE SHOPPING</button>
					<div className="cart-container__wrapper--top__texts">
						<span>Shopping Bag(2)</span> <span>Your Wishlist(0)</span>
					</div>
					<button className="checkout-now__button">CHECKOUT NOW</button>
				</div>
				<div className="cart-container__wrapper--bottom">
					<div className="cart-container__wrapper--bottom__info">
						<CartItem />
						<CartItem />
						{/* <div className="cart-container__wrapper--bottom__info--product">
							<div className="cart-container__wrapper--bottom__info--product__detail">
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
							</div>
						</div>
						<hr />
						<div className="cart-container__wrapper--bottom__info--product">
							<div className="cart-container__wrapper--bottom__info--product__detail">
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
							</div>
						</div> */}
					</div>
					<div className="cart-container__wrapper--bottom__summary">
						<h1 className="cart-container__wrapper--bottom__summary--title">
							ORDER SUMMARY
						</h1>
						<div className="cart-container__wrapper--bottom__summary--item">
							<span className="cart-container__wrapper--bottom__summary--item__text">
								Subtotal
							</span>
							<span className="cart-container__wrapper--bottom__summary--item__price">
								$80
							</span>
						</div>
						<div className="cart-container__wrapper--bottom__summary--item">
							<span className="cart-container__wrapper--bottom__summary--item__text">
								Estimated Shipping
							</span>
							<span className="cart-container__wrapper--bottom__summary--item__price">
								$5.90
							</span>
						</div>
						<div className="cart-container__wrapper--bottom__summary--item">
							<span className="cart-container__wrapper--bottom__summary--item__text">
								Shipping Discount
							</span>
							<span className="cart-container__wrapper--bottom__summary--item__price">
								$ -5.90
							</span>
						</div>
						<div className="cart-container__wrapper--bottom__summary--item">
							<span className="cart-container__wrapper--bottom__summary--item__text">
								Total
							</span>
							<span className="cart-container__wrapper--bottom__summary--item__price">
								$ 90
							</span>
						</div>
						<button> CHECKOUT NOW</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Cart;
