import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLoggedInUser } from "../../../redux/auth/authActions";
import { getPostById } from "../../../redux/post/postActions";
import "./full-post.css";

const FullPost = ({ match }) => {
	const { post_id } = match.params;
	const post = useSelector((state) => state.post);
	const dispatch = useDispatch();
	const { title, body, imageUrl, date, author } = post;

	useEffect(() => {
		dispatch(getLoggedInUser);
		dispatch(getPostById(post_id));
	}, [post_id, dispatch]);

	return (
		<div className="container">
			<div className="post-wrapper bg-white py-5 px-3 w-75 mx-auto">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<h1 className="text-capitalize display-4 mb-4">{title}</h1>

						<div className="author mb- text-capitalize">{author}</div>
						<small className="">{date} </small>
						<div className="img-wrapper mt-3 bg-dark">
							<img
								src={imageUrl}
								alt="post"
								style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
							/>
						</div>
						<div className="my-4 fs-5 fw-light">{body}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FullPost;
