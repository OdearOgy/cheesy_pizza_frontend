import React from 'react';
import styles from './Cart.module.css';
import { CustomButton } from '../../components';
import { MdDelete } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { remove as removeFromCart } from './cartSlice';

function CartItem({ item }) {
	const dispatch = useDispatch();

	return (
		<div className={styles.item}>
			<div className={styles.item__img}>
				<img src={item.img} alt={`${item.name} logo`} />
			</div>
			<div className={styles.item__text}>
				<h4>{item.name}</h4>
			</div>
			<button className={styles.remove__btn} onClick={() => dispatch(removeFromCart({ item }))}>
				<MdDelete />
			</button>
		</div>
	);
}

export default CartItem;
