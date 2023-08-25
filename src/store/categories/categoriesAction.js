import { createAction } from "../../utils/reducer/reducer";
import { CATEGORY_ACTION_TYPES } from "./categoriesTypes";

export const setCategoriesMap = newCategoriesMap =>
	createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, newCategoriesMap);
