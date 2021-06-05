import authTypes from "./authTypes";

const initialState = {
	isAuth: false,
	userInfo: null,
	isLoading: false,
	error:null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case authTypes.LOGIN_SUCCESS:
		case authTypes.REGISTER_SUCCESS:
		case authTypes.AUTH_SUCCESS:
			return {
				...state,
				isAuth: true,
				isLoading: false,
				userInfo: action.payload.userInfo
			};
		case authTypes.LOGIN_FAIL:
		case authTypes.LOGOUT_SUCCESS:
		case authTypes.REGISTER_FAIL:
		case authTypes.AUTH_FAIL:
			return {
				...state,
				isAuth: false,
				isLoading: false,
				userInfo: null
			};
		case authTypes.SET_LOADING_USER:
			return {
				...state,
				isLoading: true
			};

		case authTypes.LOGOUT:
			return {
				...state,
				isAuth: false,
				isLoading: false,
				userInfo: null
			};
		default:
			return state;
	}
};

export default authReducer;
