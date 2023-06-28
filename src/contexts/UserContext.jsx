import { createContext, useEffect, useState } from "react";
import {
	createUserDocFromAuth,
	onAuthStateChangedListener
} from "../utils/firebase/firebase";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(
		() =>
			onAuthStateChangedListener(user => {
				console.log(user);
				if (user) createUserDocFromAuth(user).then();
				setCurrentUser(user);
			}),
		[]
	);

	const value = { currentUser, setCurrentUser };

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
