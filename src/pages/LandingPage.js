import React from 'react';
import { Header, Menu, About, Delivery, Contact, Footer } from '../containers';
import { Navbar } from '../components';
import { Checkout } from '../features/order/Checkout';
const LandingPage = () => {
	return (
		<>
			<Checkout />
			<Navbar />
			<Header />
			<Menu />
			<About />
			<Delivery />
			<Contact />
			<Footer />
		</>
	);
};

export default LandingPage;
