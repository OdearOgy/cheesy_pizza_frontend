import { createSlice } from '@reduxjs/toolkit';

const initialStorageCart = JSON.parse(localStorage.getItem('cart'));

function calculateTotalPrice(cartItems) {
	let totalPrice = 0;
	if (cartItems) {
		cartItems.forEach((item) => {
			totalPrice += item.price * item.quantity;
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
			const { item, quantity } = action.payload;
			// if we're adding the same item, we're just gonna change the quantity
			const index = state.items.findIndex((current) => current.id === item.id);
			if (!index) {
				state.items[index].quantity += quantity;
			} else {
				item.quantity = quantity;
				state.items.push(item);
			}

			state.totalPrice = calculateTotalPrice(state.items);
			localStorage.setItem('cart', JSON.stringify(state.items));
		},

		remove: (state, action) => {
			const index = state.items.findIndex((item) => item.id === action.payload.item.id);
			state.items.splice(index, 1);
			state.totalPrice = calculateTotalPrice(state.items);

			localStorage.setItem('cart', JSON.stringify(state.items));
		},

		changeQuantity: (state, action) => {
			const { item, quantity } = action.payload;
			const index = state.items.findIndex((current) => current.id === item.id);

			state.items[index].quantity = quantity;
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

export const { add, remove, changeQuantity, toggle, clear } = cartSlice.actions;

export const selectCart = (state) => state.cart.items;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectOpenState = (state) => state.cart.isOpen;

export default cartSlice.reducer;
