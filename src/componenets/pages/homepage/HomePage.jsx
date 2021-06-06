import React from "react";
import RecentPostsList from "../../posts/recent-posts-list/RecentPostsList";
import "./hompage.css";

const HomePage = () => {
	return (
		<div>
			<div className="container">
				<div className="heading-wrapper p-5 bg-dark mb-5">
					<h1 className="display-1 text-light ">DEV TALKS</h1>
					<p className="lead  text-light">
						Talks about web deveolpment and everything that's related...
					</p>
				</div>
				<h2 className="display-5 mb-4">Latest</h2>
				<div className="row justify-content-center">
					<div className="col-md-12 col-sm-6">
						<RecentPostsList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
