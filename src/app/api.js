import { useEffect, useState } from 'react';

import { ServerHost } from './settings';
import Axios from 'axios';

export function useApi(url, method = 'GET') {
	const [data, setData] = useState([]);

	useEffect(() => {
		if (method === 'GET') {
			Axios.get(`${ServerHost}/${url}`).then((res) => {
				setData(res.data);
			});
		}
	}, [method, url]);

	return data;
}
