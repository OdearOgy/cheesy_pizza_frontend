import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { ApiHost } from '../app/settings';

import { MenuItem } from '../components';

import { MenuStls as styles } from '../styles';

const Menu = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const url = `${ApiHost}/items`;
		Axios.get(url).then((res) => {
			setItems(res.data);
		});
	}, []);

	return (
		<section className={styles.menu} id='menu'>
			<h2 className={styles.title}>The Cheesy Menu</h2>
			{items.length > 0 ? (
				<>
					<div className={styles.items}>
						{items.map((item) => (
							<MenuItem key={item.id} {...item} quantity={1} />
						))}
					</div>
				</>
			) : (
				<h3>Nothing to display</h3>
			)}
		</section>
	);
};

export default Menu;
