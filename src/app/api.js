import { useEffect, useState } from 'react';

import { ApiHost } from './settings';
import Axios from 'axios';

const defaultOptions = {
	method: 'GET',
};

export function useApi(endpoint, options = defaultOptions) {
	const [data, setData] = useState([]);
	const { method } = options;

	const url = `${ApiHost}/${endpoint}`;

	useEffect(() => {
		switch (method) {
			case 'POST':
				break;
			default:
				Axios.get(url)
					.then((res) => {
						setData(res.data);
					})
					.catch((err) => {
						console.warn(`Check your URL and Options: \nurl: ${url} \nOptions:`);
						console.table(options);
					});
		}
	}, [method, url, options]);

	return data;
}
