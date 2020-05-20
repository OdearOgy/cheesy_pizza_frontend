import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggle as toggleCart, selectCart } from '../features/cart/cartSlice';
import { Cart } from '../features/cart/Cart';
import { MdShoppingBasket } from 'react-icons/md';

import { NavbarStls as styles } from '../styles';
import Logo from '../assets/images';

function Header() {
	const cart = useSelector(selectCart);
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
