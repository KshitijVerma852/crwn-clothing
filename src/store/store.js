import {
	compose,
	applyMiddleware,
	legacy_createStore as createStore
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
