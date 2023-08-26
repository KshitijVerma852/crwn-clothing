import { CATEGORY_ACTION_TYPES } from "./categoriesTypes";

const INITIAL_STATE = {
	categories: []
};

export const categoriesReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
			return {
				...state,
				categories: payload
			};
		default:
			return state;
	}
};
