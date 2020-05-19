import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggle } from '../features/cart/cartSlice';
import { Cart } from '../features/cart/Cart';

import { NavbarStls as styles } from '../styles';
import Logo from '../assets/images';

function Header() {
	const dispatch = useDispatch();
	return (
		<header className={styles.header}>
			<Link className={styles.header__logo} to='/'>
				<img src={Logo} alt='Cheesy Logo' />
				<span>CheesyPizza</span>
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
				<button onClick={() => dispatch(toggle())}>Open Cart</button>
				<Cart />
				{/* <h4>+374 (12) 12312-12312</h4> */}
			</div>
		</header>
	);
}

export default Header;
