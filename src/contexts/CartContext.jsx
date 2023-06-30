import { createContext, useState } from "react";

export const CartContext = createContext({
	expanded: false,
	setExpanded: () => null
});

export const CartProvider = ({ children }) => {
	const [expanded, setExpanded] = useState(false);
	const value = { expanded, setExpanded };

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
