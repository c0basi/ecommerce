import React, { useState } from 'react';
import './Slider.scss';
import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from '@mui/icons-material';
import CSS from 'csstype';
import sliderItems from '../../data/data';

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction: string) => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	const transitionStyles = (index: number) => ({
		transform: `translateX(${index * -100}vw)`,
		transition: 'all 1.5s ease',
	});

	return (
		<div className="slider">
			<div className="slider__left" onClick={() => handleClick('left')}>
				<ArrowBackIosOutlined />
			</div>
			<div className="slider__wrapper" style={transitionStyles(slideIndex)}>
				{sliderItems.map((item) => (
					<div
						key={item.id}
						className={`slider__wrapper--slide slide-${item.id}`}
					>
						<div className="slider__wrapper--slide__imagecontainer">
							<img src={item.img} alt="item" />
						</div>
						<div className="slider__wrapper--slide__infocontainer">
							<h1 className="slider__wrapper--slide__infocontainer--title">
								{item.title}
							</h1>
							<p>{item.desc}</p>
							<button>SHOP NOW</button>
						</div>
					</div>
				))}
				{/* <div className="slider__wrapper--slide slide-1">
					<div className="slider__wrapper--slide__imagecontainer">
						<img src="https://i.ibb.co/cXFnLLV/3.png" alt="" />
					</div>
					<div className="slider__wrapper--slide__infocontainer">
						<h1 className="slider__wrapper--slide__infocontainer--title">
							SUMMER SALE
						</h1>
						<p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NEW ARRIVALS</p>
						<button>SHOP NOW</button>
					</div>
				</div>
				<div className="slider__wrapper--slide slide-2">
					<div className="slider__wrapper--slide__imagecontainer">
						<img src="https://i.ibb.co/DG69bQ4/2.png" alt="" />
					</div>
					<div className="slider__wrapper--slide__infocontainer">
						<h1 className="slider__wrapper--slide__infocontainer--title">
							WINTER SALE
						</h1>
						<p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NEW ARRIVALS</p>
						<button>SHOP NOW</button>
					</div>
				</div>
				<div className="slider__wrapper--slide slide-3">
					<div className="slider__wrapper--slide__imagecontainer">
						<img src="https://i.ibb.co/cXFnLLV/3.png" alt="" />
					</div>
					<div className="slider__wrapper--slide__infocontainer">
						<h1 className="slider__wrapper--slide__infocontainer--title">
							SPRING SALE
						</h1>
						<p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF NEW ARRIVALS</p>
						<button>SHOP NOW</button>
					</div>
				</div> */}
			</div>
			<div className="slider__right" onClick={() => handleClick('right')}>
				<ArrowForwardIosOutlined />
			</div>
		</div>
	);
};

export default Slider;
