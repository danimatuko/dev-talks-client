import axios from "axios";
import setAuthToken from "../../helpers/setAuthToken";
import authTypes from "./authTypes";

export const signUp = (data) => {
	/* To dispatch an aysnc action we use `redux-thunk` middleware, 
	which allows to return a function instead of an action object.
	The function gets the `dispatch` as an argument. */
	return async (dispatch) => {
		try {
			const res = await axios.post("auth/register", data);
		//	if (res.data.token) throw new Error("User alerady exist");

			localStorage.setItem("token", res.data.token);

			dispatch({
				type: authTypes.REGISTER_SUCCESS,
				payload: {
					userInfo: res.data.user
				}
			});
		} catch (error) {
			if (localStorage.token) localStorage.removeItem("token");
			dispatch({
				type: authTypes.REGISTER_FAIL
			});
			console.log("Server Error \n" + error);
		}
	};
};

export const login = (data) => {
	/* To dispatch an aysnc action we use `redux-thunk` middleware, 
	which allows to return a function instead of an action object.
	The function gets the `dispatch` as an argument. */
	return async (dispatch) => {
		try {
			dispatch(setLoadingUser);
			const res = await axios.post("auth/login", data);
			localStorage.setItem("token", res.data.token);
			dispatch({
				type: authTypes.LOGIN_SUCCESS,
				payload: {
					userInfo: res.data.user
				}
			});
		} catch (error) {
			dispatch({
				type: authTypes.LOGIN_FAIL
			});
			console.log("Server Error \n" + error);
		}
	};
};

export const getLoggedInUser = () => {
	/* To dispatch an aysnc action we use `redux-thunk` middleware, 
	which allows to return a function instead of an action object.
	The function gets the `dispatch` as an argument. */
	return async (dispatch) => {
		const token = localStorage.token;
		if (localStorage.token) setAuthToken(token);
		try {
			const res = await axios.get("/auth");
			if (!res) throw Error;
			dispatch({
				type: authTypes.AUTH_SUCCESS,
				payload: {
					userInfo: res.data
				}
			});
		} catch (error) {
			if (localStorage.token) localStorage.removeItem("token");
			dispatch({
				type: authTypes.AUTH_FAIL
			});
		}
	};
};

export const logout = () => {
	localStorage.removeItem("token");
	return {
		type: authTypes.LOGOUT
	};
};

export const setLoadingUser = () => {
	return { type: authTypes.SET_LOADING_USER };
};

export const getUserByEmail = () => {};
