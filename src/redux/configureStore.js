import { createStore, combineReducers, applyMiddleware } from "redux";
import { Locations } from "./locations";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			locations: Locations,
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
