import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import { MdDelete } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { remove as removeFromCart, changeQuantity } from './cartSlice';
import { QuantityBar } from '../../components';

function CartItem({ item }) {
	const dispatch = useDispatch();

	const [itemQuantity, setItemQuantity] = useState(item.quantity);

	const changeItemQuantity = (val) => {
		if (itemQuantity + val <= 0) {
			setItemQuantity(1);
		} else {
			setItemQuantity(itemQuantity + val);
		}

		dispatch(changeQuantity({ item, quantity: itemQuantity }));
	};

	return (
		<div className={styles.item}>
			<div className={styles.item__img}>
				<img src={item.img} alt={`${item.name} logo`} />
			</div>
			<div className={styles.item__text}>
				<h4>{item.name}</h4>
				<QuantityBar quantity={itemQuantity} changeQuantity={changeItemQuantity} />
			</div>
			<button className={styles.remove__btn} onClick={() => dispatch(removeFromCart({ item }))}>
				<MdDelete />
			</button>
		</div>
	);
}

export default CartItem;
