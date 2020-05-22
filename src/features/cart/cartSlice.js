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

const getItemIndex = (items, slug) => items.findIndex((item) => item.slug === slug);

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
			const index = getItemIndex(state.items, item.slug);

			// if the item is already in a cart,
			// we're just gonna increment the quantity
			if (!!state.items[index]) {
				state.items[index].quantity += quantity;
			} else {
				item.quantity = quantity;
				state.items.push(item);
			}

			state.totalPrice = calculateTotalPrice(state.items);
			localStorage.setItem('cart', JSON.stringify(state.items));
		},

		remove: (state, action) => {
			const { slug } = action.payload;
			const index = getItemIndex(state.items, slug);

			state.items.splice(index, 1);
			state.totalPrice = calculateTotalPrice(state.items);
			localStorage.setItem('cart', JSON.stringify(state.items));
		},

		changeQuantity: (state, action) => {
			const { item, quantity } = action.payload;
			const index = getItemIndex(state.items, item.slug);

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
