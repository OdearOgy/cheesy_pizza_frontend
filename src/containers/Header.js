import React from 'react';
import { CustomButton } from '../components';
import { Link as ScrollLink } from 'react-scroll';

import { HeaderStls as styles } from '../styles';
import { Pizza_1 } from '../assets/images';

const Header = () => {
	return (
		<section className={styles.head}>
			<div className={styles.head__text}>
				<h1 className={styles.title}>The Right Pizzas</h1>
				<p className={styles.description}>Pizzas need to be cheesy and a lot.</p>
				<ScrollLink spy={true} smooth={true} duration={500} to='menu'>
					<CustomButton content='Order Now' />
				</ScrollLink>
			</div>
			<div className={styles.head__img}>
				<img src={Pizza_1} alt='Pizza Img' />
			</div>
		</section>
	);
};

export default Header;
