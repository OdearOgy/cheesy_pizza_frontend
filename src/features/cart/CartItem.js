import React from 'react';
import styles from './Cart.module.css';
import { MdDelete } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { remove as removeFromCart, changeQuantity } from './cartSlice';
import { QuantityBar } from '../../components';

function CartItem({ item, quantity }) {
	const dispatch = useDispatch();

	const changeItemQuantity = (val) => {
		if (quantity + val <= 0) {
			dispatch(removeFromCart(item));
		} else {
			dispatch(changeQuantity({ item, quantity: quantity + val }));
		}
	};

	return (
		<div className={styles.item}>
			<div className={styles.item__img}>
				<img src={item.img} alt={`${item.name} logo`} />
			</div>
			<div className={styles.item__text}>
				<h4 className={styles.name}>{item.name}</h4>
				<QuantityBar quantity={quantity} changeQuantity={changeItemQuantity} />
			</div>
			<button className={styles.remove__btn} onClick={() => dispatch(removeFromCart({ slug: item.slug }))}>
				<MdDelete />
			</button>
		</div>
	);
}

export default CartItem;
