import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost, setEditMode } from "../../../redux/post/postActions";
import { showNotify } from "../../../redux/toast/toastActions";

const PostRow = ({ index, post: { post_id, title, date } }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deletePost(post_id));
		dispatch(showNotify("Your post deleted succsessfuly!"));
	};

	return (
		<tr>
			<th scope="row">{index + 1}</th>
			<td className="text-capitalize">{title}</td>
			<td>{date}</td>
			<td>True</td>
			<td>
				<Link
					to={`/posts/edit-post/${post_id}`}
					className="btn btn-secondary btn-sm mx-1"
					onClick={() => dispatch(setEditMode({ editMode: true }))}>
					Edit
				</Link>
				<button className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete()}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default PostRow;
