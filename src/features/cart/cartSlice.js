import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: JSON.parse(localStorage.getItem('cart')) || [],
		totalPrice: 0,
		isOpen: false,
	},

	reducers: {
		add: (state, action) => {
			state.items.push(action.payload.item);
			state.totalPrice += action.payload.item.price;

			localStorage.setItem('cart', JSON.stringify(state.items));
		},

		remove: (state, action) => {
			const index = state.items.findIndex((item) => item.id === action.payload.item.id);
			state.items.splice(index, 1);
			state.totalPrice -= action.payload.item.price;

			localStorage.setItem('cart', JSON.stringify(state.items));
		},

		toggle: (state) => {
			state.isOpen = !state.isOpen;
		},
	},
});

export const { add, remove, toggle } = cartSlice.actions;

export const selectCart = (state) => state.cart.items;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectOpenState = (state) => state.cart.isOpen;

export default cartSlice.reducer;
