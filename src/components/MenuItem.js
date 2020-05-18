import React from 'react';
import { MenuItemStls as styles } from '../styles';
import CustomButton from './CustomButton';
const MenuItem = (props) => {
	const { img, name, description, price } = props;

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
				<p className={styles.price}>${price}</p>

				<div className={styles.quantity}></div>
			</div>
			<CustomButton className={styles.item__btn} content='Add to Cart' />
		</div>
	);
};

export default MenuItem;
