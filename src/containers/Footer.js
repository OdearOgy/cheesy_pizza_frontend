import React from 'react';
import { Links } from '../components';
import { Link as ScrollLink } from 'react-scroll';

import { FaHeart, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FooterStls as styles } from '../styles';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__links}>
				{Links.map((link, key) => (
					<ScrollLink key={key} className={styles.link} spy={true} smooth={true} duration={500} to={link.url}>
						{link.content}
					</ScrollLink>
				))}
			</div>
			<div className={styles.social__links}>
				<a className={styles.link} href='https://www.linkedin.com/in/odearogy' target='_blank'>
					<FaLinkedin />
				</a>
				<a className={styles.link} href='https://github.com/odearogy' target='_blank'>
					<FaGithub />
				</a>
			</div>

			<div className={styles.credits}>
				<h3 className={styles.credits__title}>
					Made with
					<span className={styles.heart}>
						<FaHeart />
					</span>
					in the Dark
				</h3>
				<p className={styles.author}>by OdearOgy</p>
			</div>
		</footer>
	);
};

export default Footer;
