import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer";

export const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === productToAdd.id
	);
	if (existingCartItem) {
		console.log("here");
		return cartItems.map(cartItem =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToRemove.id
	);
	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			cartItem => cartItem.id !== cartItemToRemove.id
		);
	} else {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	}
};

const clearCartItem = (cartItems, cartItemToClear) =>
	cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
	expanded: false,
	setExpanded: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0
});

const CART_ACTION_TYPES = {
	SET_CART_ITEMS: "SET_CART_ITEMS",
	SET_EXPANDED: "SET_EXPANDED"
};

const cartReducer = (state, { type, payload }) => {
	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload
			};
		case CART_ACTION_TYPES.SET_EXPANDED:
			return {
				...state,
				expanded: payload
			};
		default:
			throw new Error(`Type does not exist: ${type}`);
	}
};

const INITIAL_STATE = {
	expanded: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0
};

export const CartProvider = ({ children }) => {
	const [{ expanded, cartItems, cartCount, cartTotal }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);

	const updateCartItemsReducer = newCartItems => {
		const newCartCount = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		const newCartTotal = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);
		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
				cartItems: newCartItems,
				cartTotal: newCartTotal,
				cartCount: newCartCount
			})
		);
	};

	const addItemToCart = productToAdd => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemToCart = productToAdd => {
		const newCartItems = removeCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const clearItemFromCart = productToAdd => {
		const newCartItems = clearCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const setExpanded = bool => {
		dispatch(createAction(CART_ACTION_TYPES.SET_EXPANDED, bool));
	};

	const value = {
		expanded,
		setExpanded,
		addItemToCart,
		removeItemToCart,
		clearItemFromCart,
		cartItems,
		cartCount,
		cartTotal
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
