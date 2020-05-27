import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectTotalPrice, selectCart, clear as clearCart } from '../cart/cartSlice';
import { selectCheckoutState, toggle, make } from './orderSlice';

import CheckoutForm from './CheckoutForm';

import styles from './Checkout.module.css';
import { MdClose } from 'react-icons/md';

export function Checkout() {
	const totalPrice = useSelector(selectTotalPrice);
	const isOpen = useSelector(selectCheckoutState);
	const cart = useSelector(selectCart);

	const dispatch = useDispatch();

	const cancelOrder = () => {
		dispatch(toggle({ modal: 'checkout' }));
		dispatch(clearCart());
	};

	const makeOrder = (data) => {
		dispatch(make({ delInfo: data, orders: cart }));
		cancelOrder();
	};

	return (
		<div className={isOpen ? styles.checkout__open : styles.checkout__closed}>
			<div className={styles.checkout__header}>
				<button
					className={styles.close__btn}
					onClick={() => dispatch(toggle({ modal: 'checkout' }))}>
					<MdClose />
				</button>
				<h3 className={styles.title}>Fill in the form</h3>
			</div>

			<div className={styles.checkout__body}>
				<CheckoutForm
					handleCheckout={(deliveryInfo) => makeOrder(deliveryInfo)}
					handleCancel={cancelOrder}
					totalPrice={totalPrice}
				/>
			</div>
		</div>
	);
}
