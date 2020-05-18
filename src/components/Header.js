import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStls as styles } from '../styles';
import Logo from '../assets/images';

function Header() {
	return (
		<header className={styles.header}>
			<Link className={styles.header__logo} to='/'>
				<img src={Logo} alt='Cheesy Logo' />
				CheesyPizza
			</Link>
			<nav className={styles.header__links}>
				<Link className={styles.link} to='/menu'>
					Menu
				</Link>
				<Link className={styles.link} to='/about'>
					About
				</Link>
				<Link className={styles.link} to='/delivery'>
					Delivery
				</Link>
				<Link className={styles.link} to='/contact'>
					Contact
				</Link>
			</nav>
			<div className={styles.header__cart}>
				<h4>+374 (12) 12312-12312</h4>
			</div>
		</header>
	);
}

export default Header;
