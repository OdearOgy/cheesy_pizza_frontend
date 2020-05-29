import { createSlice } from '@reduxjs/toolkit';

const initialStorageCart = JSON.parse(localStorage.getItem('cart'));

function calcTotalPrice(cartItems) {
	let totalPrice = 0;
	const delFee = calcDeliveryFee(cartItems);
	if (cartItems) {
		cartItems.forEach((item) => {
			totalPrice += item.price * item.quantity;
		});
	} else {
		totalPrice = 0;
	}
	return Number((totalPrice + delFee).toFixed(2));
}

function calcDeliveryFee(cartItems) {
	let delFee = 0;

	if (cartItems) {
		cartItems.forEach((item) => {
			delFee += (item.price * item.slices * item.quantity) / 100;
		});
	}

	return Number(delFee.toFixed(2));
}

const getItemIndex = (items, slug) => items.findIndex((item) => item.slug === slug);

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: initialStorageCart || [],
		totalPrice: calcTotalPrice(initialStorageCart),
		deliveryFee: calcDeliveryFee(initialStorageCart),
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

			state.deliveryFee = calcDeliveryFee(state.items);
			state.totalPrice = calcTotalPrice(state.items);
			localStorage.setItem('cart', JSON.stringify(state.items));
		},

		remove: (state, action) => {
			const { slug } = action.payload;
			const index = getItemIndex(state.items, slug);

			state.items.splice(index, 1);
			state.totalPrice = calcTotalPrice(state.items);
			localStorage.setItem('cart', JSON.stringify(state.items));
		},

		changeQuantity: (state, action) => {
			const { item, quantity } = action.payload;
			const index = getItemIndex(state.items, item.slug);

			state.items[index].quantity = quantity;
			state.deliveryFee = calcDeliveryFee(state.items);
			state.totalPrice = calcTotalPrice(state.items);
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
export const selectDeliveryFee = (state) => state.cart.deliveryFee;
export const selectOpenState = (state) => state.cart.isOpen;

export default cartSlice.reducer;
