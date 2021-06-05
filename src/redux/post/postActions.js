import axios from "axios";
import postTypes from "./postTypes";

export const addPost = (post) => {
	/* To dispatch an aysnc action we use `redux-thunk` middleware, 
	which allows to return a function instead of an action object.
	The function gets the `dispatch` as an argument. */
	return async (dispatch) => {
		try {
			const res = await axios.post("/posts", post);
			dispatch({
				type: postTypes.POST_SUCCESS,
				payload: res.data.post
			});
		} catch (error) {
			dispatch({
				type: postTypes.POST_FAIL
			});
			console.log(error.message);
		}
	};
};

export const editPost = (post) => {
	/* To dispatch an aysnc action we use `redux-thunk` middleware, 
	which allows to return a function instead of an action object.
	The function gets the `dispatch` as an argument. */
	return async (dispatch) => {
		try {
			const res = await axios.put(`/posts/${post.post_id}`, post);
			dispatch({
				type: postTypes.EDIT_POST_SUCCESS,
				payload: res.data.post
			});
		} catch (error) {
			dispatch({
				type: postTypes.EDIT_POST_FAIL
			});
			console.log(error.message);
		}
	};
};

export const setEditMode = (state) => {
	return {
		type: postTypes.SET_EDIT_MODE,
		payload: state.editMode
	};
};

export const deletePost = (id) => {
	/* To dispatch an aysnc action we use `redux-thunk` middleware, 
	which allows to return a function instead of an action object.
	The function gets the `dispatch` as an argument. */
	return async (dispatch) => {
		try {
			await axios.delete(`/posts/${id}`);
			dispatch({
				type: postTypes.DELETE_POST_SUCCESS
			});
		} catch (error) {
			dispatch({
				type: postTypes.DELETE_POST_FAIL
			});
			console.log(error.message);
		}
	};
};

export const getPostById = (post_id) => {
	return (dispatch) => {
		axios
			.get(`/posts/${post_id}`)
			.then((res) =>
				dispatch({
					type: postTypes.GET_POST_BY_ID_SUCCESS,
					payload: res.data
				})
			)
			.catch((err) => {
				console.log(err.message);
				dispatch({
					type: postTypes.GET_POST_BY_ID_FAIL
				});
			});
	};
};
