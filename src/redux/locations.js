// this is where location state goes.
// we add locations and deal with any failure of loading here
import * as ActionTypes from "./ActionTypes";

export const Locations = (
	state = {
		locations: [],
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_LOCATION:
			return {
				...state,
				locations: action.payload,
			};
		default:
			return state;
	}
};
