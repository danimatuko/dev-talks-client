import profileTypes from "./profileTypes";

const initialState = {
	usersPosts: [],
	isLoading: false
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case profileTypes.GET_USERS_POSTS_SUCCESS:
			return {
				...state,
				usersPosts: action.payload,
				isLoading: false
			};
		case profileTypes.GET_USERS_POSTS_FAIL:
			return {
				...state,
				usersPosts: [],
				isLoading: false
			};

		case profileTypes.SET_LOADING_USERS_POSTS:
			return {
				...state,
				isLoading: true
			};

		default:
			return state;
	}
};

export default profileReducer;
