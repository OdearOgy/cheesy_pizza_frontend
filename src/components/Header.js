import React from 'react';
import CustomButton from './CustomButton';
import { HeaderStls as styles } from '../styles';
import { Pizza_1 } from '../assets/images';

const Header = () => {
	return (
		<section className={styles.head}>
			<div className={styles.head__text}>
				<h1 className={styles.title}>The Right Pizzas</h1>
				<p className={styles.description}>Pizzas need to be cheesy, and a lot.</p>
				<CustomButton content='Order Now' />
			</div>
			<div className={styles.head__img}>
				<img src={Pizza_1} alt='Pizza Img' />
			</div>
		</section>
	);
};

export default Header;
