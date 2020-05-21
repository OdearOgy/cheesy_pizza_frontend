import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, selectTotalPrice, selectOpenState, toggle as toggleCart } from './cartSlice';
import CartItem from './CartItem';

import { CustomButton } from '../../components';
import styles from './Cart.module.css';
import { MdClose } from 'react-icons/md';

export function Cart() {
	const cart = useSelector(selectCart);
	const totalPrice = useSelector(selectTotalPrice);
	const isOpen = useSelector(selectOpenState);
	const dispatch = useDispatch();

	return (
		<div className={isOpen ? styles.cart__open : styles.cart__closed}>
			<div className={styles.cart__header}>
				<button
					className={styles.close__btn}
					onClick={() => {
						dispatch(toggleCart());
					}}>
					<MdClose />
				</button>
				<h2 className={styles.cart__title}> Cart </h2>
			</div>
			{cart.length > 0 ? (
				<>
					<div className={styles.cart__items}>
						{cart.map((item, key) => (
							<CartItem key={key} item={item} />
						))}
					</div>
					<div className={styles.cart__footer}>
						<div className={styles.total__info}>
							<span>Total: </span>
							<span className={styles.total__price}> ${totalPrice} </span>
						</div>
						<CustomButton className={styles.order__btn} content='Order' />
					</div>
				</>
			) : (
				<h4 className={styles.cart__empty}>Your cart is empty</h4>
			)}
		</div>
	);
}
