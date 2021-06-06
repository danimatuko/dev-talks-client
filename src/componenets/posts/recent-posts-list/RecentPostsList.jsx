import React, { useState, useEffect } from "react";
import RecentPosts from "../recent-post/RecentPost";
import axios from "axios";
import checkEnvironment from "../../../helpers/checkEnvironment";

const domain = checkEnvironment();
const RecentPostsList = () => {
	const [posts, setPosts] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const getLatestPosts = async () => {
		setIsLoading(true);

		try {
			const res = await axios.get(`${domain}/posts`);
			const recentPosts = res.data;
			setPosts(recentPosts);
			setIsLoading(false);
		} catch (error) {
			console.error("error in getLatestPosts \n" + error);
		}
	};

	useEffect(() => {
		getLatestPosts();
	}, []);

	return isLoading === true ? (
		<div>isLoading...</div>
	) : (
		<div className="row row-cols-lg-3 row-cols-md-2 align-items-end">
			{posts != null &&
				posts.map((post) => {
					return (
						<div className="col-12">
							<RecentPosts key={post.post_id} post={post} />
						</div>
					);
				})}
		</div>
	);
};

export default RecentPostsList;
