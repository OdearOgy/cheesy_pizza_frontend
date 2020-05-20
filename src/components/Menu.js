import React from 'react';
import MenuItem from './MenuItem';
import { MenuStls as styles } from '../styles';
import { Pizza_2 } from '../assets/images';
import CustomButton from './CustomButton';

const items = [
	{
		id: 0,
		img: Pizza_2,
		name: 'Pizza Pepperoni',
		description: 'Delicious Pizza Pepperoni, all the cheesiness you need.',
		price: 30,
	},
	{
		id: 1,
		img: Pizza_2,
		name: 'Pizza Pepperoni 1',
		description: 'Delicious Pizza Pepperoni, all the cheesiness you need.',
		price: 40,
	},
	{
		id: 2,
		img: Pizza_2,
		name: 'Pizza Pepperoni 2',
		description: 'Delicious Pizza Pepperoni, all the cheesiness you need.',
		price: 50,
	},
	{
		id: 3,
		img: Pizza_2,
		name: 'Pizza Pepperoni 3',
		description: 'Delicious Pizza Pepperoni, all the cheesiness you need.',
		price: 50,
	},
	{
		id: 4,
		img: Pizza_2,
		name: 'Pizza Pepperoni 4',
		description: 'Delicious Pizza Pepperoni, all the cheesiness you need.',
		price: 50,
	},
];

const Menu = () => {
	return (
		<div className={styles.menu}>
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
		</div>
	);
};

export default Menu;
