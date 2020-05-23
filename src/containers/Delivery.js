import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { CustomButton } from '../components';
import { DeliveryStls as styles } from '../styles';
import { Delivery as img } from '../assets/images';

const Delivery = () => {
	return (
		<section className={styles.delivery} id='delivery'>
			<div className={styles.delivery__text}>
				<h2 className={styles.del__title}>Delivery</h2>
				<h4 className={styles.title}>9:00 A.M - 23:00 P.M</h4>
				<p className={styles.description}> Free Delivery in the city</p>
				<ScrollLink spy={true} smooth={true} duration={500} to='menu'>
					<CustomButton content='Show menu' />
				</ScrollLink>
			</div>
			<div className={styles.delivery__img}>
				<img src={img} alt='Delivery Bag' />
			</div>
		</section>
	);
};

export default Delivery;
