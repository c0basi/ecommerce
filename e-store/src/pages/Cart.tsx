import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar';
import CartItem from '../components/cart/CartItem';
import { useSelector } from 'react-redux';
import { cartSelector } from '../redux/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import './Cart.scss';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import { userRequest } from '../utils/requestMethods';

const Cart = () => {
	const [stripeToken, setsStripeToken] = useState<Token | null>(null);
	const navigate = useNavigate();
	const stripe_key: string = process.env.REACT_APP_STRIPE_KEY!;
	const cartItems = useSelector(cartSelector).products;
	const total = useSelector(cartSelector).total;
	console.log('stripe key');

	console.log(stripe_key);

	const onToken = (token: Token) => {
		setsStripeToken(token);
	};

	console.log(stripeToken);

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await userRequest.post('/checkout/payment', {
					tokenId: stripeToken?.id,
					// amount: total * 100,
					amount: 5000,
				});

				navigate('/success');
			} catch (err) {}
		};
		stripeToken && makeRequest();
	}, [stripeToken, total]);

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
						{cartItems.map((item) => (
							<CartItem
								key={item._id}
								itemColor={item.color[0]}
								img={item.img}
								id={item._id.substring(0, 6)}
								title={item.title}
								price={item.price}
								quantity={item.quantity}
								size={item.size[0]}
							/>
						))}
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
								$ {total}
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
						<StripeCheckout
							name="Charles Shop"
							billingAddress
							shippingAddress
							description={`Your total is $${total}`}
							amount={total * 100}
							token={onToken}
							stripeKey={stripe_key}
						>
							<button> Checkout now </button>
						</StripeCheckout>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Cart;
