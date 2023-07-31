import { createContext, useEffect, useReducer } from "react";
import {
	createUserDocFromAuth,
	onAuthStateChangedListener
} from "../utils/firebase/firebase";
import { createAction } from "../utils/reducer/reducer";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
	SET_CURRENT_USER: "SET_CURRENT_USER"
};

const userReducer = (state, { type, payload }) => {
	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload
			};
		default:
			throw new Error(`Unhandled type ${type}`);
	}
};

const INITIAL_STATE = {
	currentUser: null
};

export const UserProvider = ({ children }) => {
	const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

	const setCurrentUser = user => {
		dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
	};

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
