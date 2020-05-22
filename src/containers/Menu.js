import React, { useEffect, useState } from 'react';
import { useApi } from '../app/api';

import { MenuItem, CustomButton } from '../components';

import { MenuStls as styles } from '../styles';

const Menu = () => {
	const [items, setItems] = useState([]);
	const data = useApi('items');

	useEffect(() => {
		setItems(data);
	}, [data]);

	return (
		<section className={styles.menu}>
			<h2 className={styles.title}>The Cheesy Menu</h2>
			{items.length > 0 ? (
				<>
					<div className={styles.items}>
						{items.map((item, key) => (
							<MenuItem key={key} {...item} quantity={1} />
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
