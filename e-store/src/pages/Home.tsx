import React from 'react';
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider/Slider';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer/Footer';

const Home = () => {
	return (
		<div>
			<Announcement />
			<NavBar />
			<Slider />
			<Categories />
			<Products
				cat={'shop'}
				filters={{ color: 'black', size: 'M' }}
				sort="newest"
			/>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
