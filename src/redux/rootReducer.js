import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import postReducer from "./post/postReducer";
import profileReducer from "./profile/profileReducer";
import toastReducer from "./toast/toastReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
	profile: profileReducer,
	toast: toastReducer
});

export default rootReducer;
