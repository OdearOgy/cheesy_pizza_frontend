import { createSlice } from '@reduxjs/toolkit';

const initialStorageOrders = JSON.parse(localStorage.getItem('orders'));
const initialStorageDelInfo = JSON.parse(localStorage.getItem('deliveryInfo'));

export const orderSlice = createSlice({
	name: 'order',
	initialState: {
		orders: initialStorageOrders || [],
		deliveryInfo: initialStorageDelInfo || {},
		checkoutIsOpen: true,
		ordersIsOpen: false,
	},

	reducers: {
		make: (state, action) => {
			const { delInfo, orders } = action.payload;
			const order = {
				deliveryDetails: delInfo,
				items: orders,
			};

			if (delInfo.rememberMe) {
				localStorage.setItem('deliveryInfo', JSON.stringify(delInfo));
			}
			state.orders.push(order);
			localStorage.setItem('orders', JSON.stringify(state.orders));
		},

		toggle: (state, action) => {
			const { modal } = action.payload;
			switch (modal) {
				case 'orders':
					state.ordersIsOpen = !state.ordersIsOpen;
					break;
				case 'checkout':
					state.checkoutIsOpen = !state.checkoutIsOpen;
					break;
				default:
					break;
			}
		},
	},
});

export const { toggle, make } = orderSlice.actions;
export const selectCheckoutState = (state) => state.order.checkoutIsOpen;
export const selectOrderState = (state) => state.order.ordersIsOpen;

export default orderSlice.reducer;
