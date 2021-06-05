import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersPosts } from "../../../redux/profile/profileActions";
import PostRow from "../post-row/PostRow";

const DashboardTable = () => {
	const { usersPosts } = useSelector((state) => state.profile);
	const usersPostsModified = useSelector((state) => state.toast.isVisible);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsersPosts());
	}, [usersPostsModified, dispatch]);

	return (
		<div className="my-5">
			<h3>Your Posts</h3>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Title</th>
						<th scope="col">Date</th>
						<th scope="col">Allow Comments</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{usersPosts.map((post, index) => (
						<PostRow key={post.post_id} post={post} index={index} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DashboardTable;
