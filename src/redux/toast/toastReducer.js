export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";

const initialState = {
	isVisible: false,
	message: ""
};

const toastReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_NOTIFICATION:
			return {
				...state,
				isVisible: true,
				message: action.payload
			};
		case HIDE_NOTIFICATION:
			return {
				...state,
				isVisible: false,
				message: ""
			};
		default:
			return state;
	}
};

export default toastReducer;
