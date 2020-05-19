import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, selectTotalPrice, selectOpenState } from './cartSlice';

import { CustomButton, MenuItem } from '../../components';
import styles from './Cart.module.css';
import CartItem from './CartItem';

export function Cart() {
	const cart = useSelector(selectCart);
	const totalPrice = useSelector(selectTotalPrice);
	const isOpen = useSelector(selectOpenState);

	return (
		<div className={isOpen ? styles.cart__open : styles.cart__closed}>
			<h2 className={styles.cart__title}> Cart </h2>

			<div className={styles.cart__items}>
				{cart.map((item, key) => (
					<CartItem key={key} item={item} />
				))}
			</div>

			<div className={styles.total__info}>
				<span>Total: </span>
				<span className={styles.total__price}> ${totalPrice} </span>
			</div>
			<CustomButton className={styles.order__btn} content='Order' />
		</div>
	);
}
