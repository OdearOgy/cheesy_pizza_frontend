import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add as addToCart } from '../features/cart/cartSlice';
import CustomButton from './CustomButton';
import QuantityBar from './QuantityBar';

import { MenuItemStls as styles } from '../styles';
import { FaPizzaSlice } from 'react-icons/fa';

function MenuItem(props) {
	const { img, name, description, price, quantity, slices } = props;
	const dispatch = useDispatch();
	const [orderQuantity, setOrderQuantity] = useState(quantity);

	const changeQuantity = (val) => {
		if (orderQuantity + val <= 0) {
			setOrderQuantity(1);
		} else {
			setOrderQuantity(orderQuantity + val);
		}
	};

	return (
		<div className={styles.item}>
			<div className={styles.item__img}>
				<img src={img} alt='Item img' />
			</div>
			<div className={styles.item__text}>
				<h3 className={styles.name}>{name}</h3>
				<p className={styles.description}> {description}</p>
			</div>

			<div className={styles.item__info}>
				<span className={styles.price}>${price}</span>
				<QuantityBar quantity={orderQuantity} changeQuantity={changeQuantity} />
				<span className={styles.slices}>
					{slices}
					<FaPizzaSlice />
				</span>
			</div>
			<CustomButton
				handleClick={() => dispatch(addToCart({ item: { ...props }, quantity: orderQuantity }))}
				className={styles.item__btn}
				content='Add to Cart'
			/>
		</div>
	);
}

export default MenuItem;
