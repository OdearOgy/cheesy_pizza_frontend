import React from 'react';
import Iframe from 'react-iframe';
import { ContactStls as styles } from '../styles';

const Contact = () => {
	return (
		<section className={styles.contact} id='contact'>
			<Iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8089467083178!2d44.50454731572191!3d40.19106507725629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd1981374367%3A0x7dbec4fbdaa511c9!2sAchajour%20Lovers&#39;%20Park!5e0!3m2!1sen!2s!4v1590197104709!5m2!1sen!2s'
				width='1800'
				height='700'
				frameborder='0'
				allowFullScreen=''
				aria-hidden='false'
				className={styles.map}
			/>

			<div className={styles.contact__card}>
				<h2 className={styles.card__title}>Contacts</h2>
				<h3 className={styles.title}>Our Address:</h3>
				<p className={styles.description}>Achajour Lovers' Park 21 M. Baghramyan Avenue, Yerevan 0019</p>
				<h3 className={styles.title}>Our Work Hours:</h3>
				<p className={styles.description}> Mon-Sun, 9:00 A.M. - 11:00 P.M.</p>
			</div>
		</section>
	);
};

export default Contact;
