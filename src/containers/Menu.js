import React, { useEffect, useState } from 'react';
import { MenuItem, CustomButton } from '../components';

import { MenuStls as styles } from '../styles';
import { Pizza_2 } from '../assets/images';

const orders = [
	{
		id: 0,
		img: Pizza_2,
		name: 'Pizza Pepperoni',
		description: 'Delicious Pizza Pepperoni, all the cheesiness you need.',
		price: 30,
		quantity: 1,
		slices: 6,
	},
	{
		id: 1,
		img: Pizza_2,
		name: 'Pizza Pepperoni 1',
		description: 'Delicious Pizza Pepperoni, all the cheesiness you need.',
		price: 40,
		quantity: 1,
		slices: 6,
	},
	{
		id: 2,
		img: Pizza_2,
		name: 'Pizza Pepperoni 2',
		description: 'Delicious Pizza Pepperoni, all the cheesiness you need.',
		price: 50,
		quantity: 1,
		slices: 6,
	},
	{
		id: 3,
		img: Pizza_2,
		name: 'Pizza Pepperoni 3',
		description: 'Delicious Pizza Pepperoni, all the cheesiness you need.',
		price: 50,
		quantity: 1,
		slices: 6,
	},
	{
		id: 4,
		img: Pizza_2,
		name: 'Pizza Pepperoni 4',
		description: 'Delicious Pizza Pepperoni, all the cheesiness you need.',
		price: 50,
		quantity: 1,
		slices: 6,
	},
];

const Menu = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setItems(orders);
		}, 1000);
	}, []);

	return (
		<section className={styles.menu}>
			<h2 className={styles.title}>The Cheesy Menu</h2>
			{items.length > 0 ? (
				<>
					<div className={styles.items}>
						{items.map((item, key) => (
							<MenuItem key={key} {...item} />
						))}
					</div>
					<CustomButton className={styles.show__menu} content='Show more' />
				</>
			) : (
				<h3>Nothing to display</h3>
			)}
		</section>
	);
};

export default Menu;
