import React from 'react';
import { ApiHost } from '../../app/settings';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
	selectTotalPrice,
	selectDeliveryFee,
	selectCart,
	clear as clearCart,
	toggle as toggleCart,
} from '../cart/cartSlice';
import { selectCheckoutState, toggle as toggleCheckout, make } from './orderSlice';

import CheckoutForm from './CheckoutForm';

import styles from './Checkout.module.css';
import { MdClose } from 'react-icons/md';

export function Checkout() {
	const totalPrice = useSelector(selectTotalPrice);
	const deliveryFee = useSelector(selectDeliveryFee);
	const isOpen = useSelector(selectCheckoutState);
	const cart = useSelector(selectCart);
	const dispatch = useDispatch();
	const history = useHistory();

	const cancelOrder = () => {
		dispatch(toggleCart());
		dispatch(toggleCheckout());
		dispatch(clearCart());
	};

	const makeOrder = (data) => {
		const prices = {
			total: totalPrice,
			delivery: deliveryFee,
		};
		const url = `${ApiHost}/order/create/`;

		dispatch(make({ delInfo: data, orders: cart }));

		Axios.post(url, {
			items: cart,
			prices,
		})
			.then((res) => {
				cancelOrder();
				history.push(`/orders/${res['data']['order_slug']}`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className={isOpen ? styles.checkout__open : styles.checkout__closed}>
			<div className={styles.checkout__header}>
				<button className={styles.close__btn} onClick={() => dispatch(toggleCheckout())}>
					<MdClose />
				</button>
				<h3 className={styles.title}>Fill in the form</h3>
			</div>

			<div className={styles.checkout__body}>
				<CheckoutForm
					handleCheckout={makeOrder}
					handleCancel={cancelOrder}
					totalPrice={totalPrice}
				/>
			</div>
		</div>
	);
}
