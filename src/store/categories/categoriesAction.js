import { createAction } from "../../utils/reducer/reducer";
import { CATEGORY_ACTION_TYPES } from "./categoriesTypes";

export const categoriesActionCreator = newCategoriesArr =>
	createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, newCategoriesArr);
