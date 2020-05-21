import React from 'react';
import { QuantityBarStls as styles } from '../styles';
import { FaMinus, FaPlus } from 'react-icons/fa';

function QuantityBar({ quantity, changeQuantity }) {
	return (
		<div className={styles.quantity}>
			<button className={styles.quantity__btn} aria-label='Decrement value' onClick={() => changeQuantity(-1)}>
				<FaMinus />
			</button>

			<span> {quantity} </span>
			<button className={styles.quantity__btn} aria-label='Increment value' onClick={() => changeQuantity(1)}>
				<FaPlus />
			</button>
		</div>
	);
}

export default QuantityBar;
