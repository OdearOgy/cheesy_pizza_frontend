import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, orderReducer } from '../features';

export default configureStore({
	reducer: {
		cart: cartReducer,
		order: orderReducer,
	},
});
