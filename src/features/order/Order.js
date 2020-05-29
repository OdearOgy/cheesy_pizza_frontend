import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import host, { ApiHost } from '../../app/settings';
import Axios from 'axios';

import styles from './Order.module.css';
import { MdArrowBack } from 'react-icons/md';

const Order = () => {
	const [orders, setOrders] = useState([]);
	const [total, setTotal] = useState(0);
	const [delivery, setDelivery] = useState(0);
	const { slug } = useParams();
	const history = useHistory();

	const url = `${ApiHost}/orders/${slug}/`;

	useEffect(() => {
		Axios.get(url).then((res) => {
			setTotal(res.data['total_price']);
			setDelivery(res.data['delivery_fee']);
			setOrders(res.data['items']);
		});
	}, [url]);

	return (
		<div className={styles.order__page}>
			<div className={styles.del__info}>
				<span>Delivery fee: ${delivery}</span>
				<span>Total to pay: ${total}</span>
			</div>

			<button className={styles.back__btn} onClick={() => history.push('/')}>
				<MdArrowBack />
			</button>

			<div className={styles.orders}>
				{orders.map(({ item, quantity }, key) => (
					<div className={styles.order__item} key={key}>
						{console.log(item)}
						<div className={styles.order__img}>
							<img src={`${host}${item.img}`} alt={`${item.name} logo`} />
						</div>

						<div className={styles.order__text}>
							<h4 className={styles.name}>{item.name}</h4>
							<p className={styles.quantity}>Quantity: {quantity}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Order;
