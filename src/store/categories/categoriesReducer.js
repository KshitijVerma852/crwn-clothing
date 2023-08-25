import { CATEGORY_ACTION_TYPES } from "./categoriesTypes";

const INITIAL_STATE = {
	categoriesMap: {}
};

export const categoriesReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP:
			return {
				...state,
				categoriesMap: payload
			};
		default:
			return state;
	}
};
