import * as ActionTypes from "./ActionTypes";

export const fetchLocations = () => (dispatch) => {
	dispatch(locationsLoading());

	return fetch(baseUrl + "locations")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((locations) => dispatch(addLocations(locations)))
		.catch((error) => dispatch(locationsFailed(error.message)));
};

export const locationsLoading = () => ({
	type: ActionTypes.LOCATIONS_LOADING,
});

export const locationsFailed = (errMess) => ({
	type: ActionTypes.LOCATIONS_FAILED,
	payload: errMess,
});

export const addLocations = (locations) => ({
	type: ActionTypes.ADD_LOCATIONS,
	payload: locations,
});
