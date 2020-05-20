import { createSlice } from '@reduxjs/toolkit';

const initialStorageCart = JSON.parse(localStorage.getItem('cart'));

function calculateTotalPrice(cartItems) {
	let totalPrice = 0;
	if (cartItems) {
		cartItems.forEach((item) => {
			totalPrice += item.price;
		});
	} else {
		totalPrice = 0;
	}
	return totalPrice;
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: initialStorageCart || [],
		totalPrice: calculateTotalPrice(initialStorageCart),
		isOpen: false,
	},

	reducers: {
		add: (state, action) => {
			state.items.push(action.payload.item);
			state.totalPrice = calculateTotalPrice(state.items);

			localStorage.setItem('cart', JSON.stringify(state.items));
		},

		remove: (state, action) => {
			const index = state.items.findIndex((item) => item.id === action.payload.item.id);
			state.items.splice(index, 1);
			state.totalPrice = calculateTotalPrice(state.items);

			localStorage.setItem('cart', JSON.stringify(state.items));
		},

		clear: (state) => {
			state.items = [];
			localStorage.removeItem('cart');
		},

		toggle: (state) => {
			state.isOpen = !state.isOpen;
		},
	},
});

export const { add, remove, toggle, clear } = cartSlice.actions;

export const selectCart = (state) => state.cart.items;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectOpenState = (state) => state.cart.isOpen;

export default cartSlice.reducer;
