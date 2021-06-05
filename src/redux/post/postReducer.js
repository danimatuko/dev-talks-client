import postTypes from "./postTypes";

const initialState = {
	title: "",
	body: "",
	imageUrl: "",
	date: "",
	editMode: false,
	author: ""
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case postTypes.POST_SUCCESS:
		case postTypes.EDIT_POST_SUCCESS:
		case postTypes.GET_POST_BY_ID_SUCCESS:
			return {
				...state,
				title: action.payload.title,
				body: action.payload.body,
				imageUrl: action.payload.imageUrl,
				date: action.payload.date,
				author: action.payload.author
			};
		case postTypes.POST_FAIL:
			return {
				...state,
				title: "",
				body: "",
				imageUrl: ""
			};
		case postTypes.SET_EDIT_MODE:
			return {
				...state,
				editMode: action.payload
			};

		case postTypes.EDIT_POST_FAIL:
		case postTypes.GET_POST_BY_ID_FAIL:
			return state;

		default:
			return state;
	}
};

export default postReducer;
