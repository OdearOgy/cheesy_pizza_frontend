import { createSlice } from '@reduxjs/toolkit';

const initialStorageOrders = JSON.parse(localStorage.getItem('orders'));
const initialStorageDelInfo = JSON.parse(localStorage.getItem('deliveryInfo'));

export const orderSlice = createSlice({
	name: 'order',
	initialState: {
		orders: initialStorageOrders || [],
		deliveryInfo: initialStorageDelInfo || {},
		checkoutIsOpen: false,
	},

	reducers: {
		make: (state, action) => {
			const { delInfo, orders } = action.payload;
			if (delInfo.rememberMe) {
				localStorage.setItem('deliveryInfo', JSON.stringify(delInfo));
			}
			state.orders.push(orders);
			localStorage.setItem('orders', JSON.stringify(state.orders));
		},

		toggle: (state) => {
			state.checkoutIsOpen = !state.checkoutIsOpen;
		},
	},
});

export const { toggle, make } = orderSlice.actions;
export const selectCheckoutState = (state) => state.order.checkoutIsOpen;
export const selectOrderState = (state) => state.order.ordersIsOpen;

export default orderSlice.reducer;
