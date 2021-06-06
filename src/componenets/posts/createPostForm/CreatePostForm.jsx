import React, { useEffect } from "react";
import newPostSchema from "./newPostSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { addPost, editPost } from "../../../redux/post/postActions";
import { useParams } from "react-router";
import axios from "axios";
import { showNotify } from "../../../redux/toast/toastActions";
import checkEnvironment from "../../../helpers/checkEnvironment";

const domain = checkEnvironment();

const CreatePostForm = ({ history }) => {
	// Redux hooks
	const dispatch = useDispatch();
	const editMode = useSelector((state) => state.post.editMode);
	// React hooks
	const { post_id } = useParams();
	useEffect(() => {
		editMode && getPostById(post_id);
		// eslint-disable-next-line
	}, []);

	// react-hook-form -> useForm hook
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(newPostSchema)
	});

	const getPostById = async (post_id) => {
		try {
			const res = await axios.get(`${domain}/posts/${post_id}`);
			populateFormData(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	const populateFormData = (data) => {
		// map the post object to a key => value pairs.
		// The 'setValue' hook from 'react-hook-form',
		// requires a key=>value to change value programmatically.
		const formFileds = Object.entries(data).map(([key, value]) => ({ key, value }));
		setValue(formFileds.forEach(({ key, value }) => setValue(key, value)));
	};
	// handle submit
	const onFormSubmit = (post, e) => {
		if (editMode) {
			dispatch(editPost(post));
			dispatch(showNotify("Your post edited succsessfuly!"));
		} else {
			dispatch(addPost(post));
			dispatch(showNotify("Your post added succsessfuly!"));
		}

		// reset after form submit
		e.target.reset();
		history.push(`/profile/dashboard`);
	};

	return (
		<form onSubmit={handleSubmit(onFormSubmit)}>
			<div className="mb-3">
				<label htmlFor="title" className="form-label">
					Title
				</label>
				<input
					type="text"
					className="form-control"
					id="title"
					name="title"
					{...register("title")}
				/>
				<p className="text-danger ">{errors.title?.message}</p>
			</div>

			<div className="mb-3">
				<label htmlFor="body" className="form-label">
					Write your post here
				</label>
				<textarea
					type="text"
					className="form-control"
					id="body"
					name="body"
					rows="10"
					{...register("body")}
				/>
				<p className="text-danger">{errors.body?.message}</p>
			</div>

			<div className="mb-3">
				<label htmlFor="imageUrl" className="form-label">
					Add Image (optional)
				</label>
				<input
					type="text"
					className="form-control"
					id="imageUrl"
					name="imageUrl"
					{...register("imageUrl")}
				/>
				<p className="text-danger">{errors.imageUrl?.message}</p>
			</div>

			<button type="submit" className="btn btn-dark">
				{editMode ? "Edit Post" : "Add Post"}
			</button>
		</form>
	);
};

export default CreatePostForm;
