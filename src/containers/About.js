import React from 'react';
import { AboutStls as styles } from '../styles';
import { Pizza_8 } from '../assets/images';

const About = () => {
	return (
		<section className={styles.about} id='about'>
			<div className={styles.about__img}>
				<img src={Pizza_8} alt='a cheesy pizza' />
			</div>
			<div className={styles.about__text}>
				<h2 className={styles.title}>About Us</h2>
				<p className={styles.description}>
					We are proud of our product. We make pizzas a reality, a cheesy, tasty, crunchy reality.
				</p>
			</div>
		</section>
	);
};

export default About;
