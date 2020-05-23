import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggle as toggleCart, selectCart } from '../features/cart/cartSlice';
import { Cart } from '../features/cart/Cart';
import { Link as ScrollLink } from 'react-scroll';

import { MdShoppingBasket, MdMenu, MdClose } from 'react-icons/md';

import { NavbarStls as styles } from '../styles';
import Logo from '../assets/images';

function Header() {
	const cart = useSelector(selectCart);
	const dispatch = useDispatch();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = (state) => setMenuOpen(state);

	const links = [
		{
			url: 'menu',
			content: 'Menu',
		},
		{
			url: 'about',
			content: 'About',
		},
		{
			url: 'delivery',
			content: 'Delivery',
		},
		{
			url: 'contact',
			content: 'Contact',
		},
	];

	return (
		<header className={styles.header}>
			<Link className={styles.header__logo} to='/'>
				<img src={Logo} alt='Cheesy Logo' />
				<span className={styles.logo__text}>CheesyPizza</span>
			</Link>
			<nav className={menuOpen ? `${styles.mobile__links} ${styles.header__links}` : styles.header__links}>
				{links.map((link, key) => (
					<ScrollLink
						key={key}
						className={styles.link}
						spy={true}
						smooth={true}
						duration={500}
						to={link.url}
						onClick={() => toggleMenu(false)}>
						{link.content}
					</ScrollLink>
				))}

				<button className={`${styles.nav__hamburger} ${styles.nav__close}`} onClick={() => toggleMenu(false)}>
					<MdClose />
				</button>
			</nav>

			<div className={styles.header__cart}>
				<button className={styles.nav__hamburger} onClick={() => toggleMenu(true)}>
					<MdMenu />
				</button>
				<button className={styles.cart__btn} onClick={() => dispatch(toggleCart())}>
					<MdShoppingBasket />
					<span className={styles.cart__counter}>{cart.length}</span>
				</button>
				<Cart />
			</div>
		</header>
	);
}

export default Header;
