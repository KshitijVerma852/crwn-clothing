import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === productToAdd.id
	);
	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
	expanded: false,
	setExpanded: () => {},
	cartItems: [],
	addItemToCart: () => {},
	itemCount: 0
});

export const CartProvider = ({ children }) => {
	const [expanded, setExpanded] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [itemCount, setItemCount] = useState(0);

	const addItemToCart = productToAdd => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity;
		}, 0);
		setItemCount(newCartCount);
	}, [cartItems]);

	const value = {
		expanded,
		setExpanded,
		addItemToCart,
		cartItems,
		itemCount,
		setItemCount
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
