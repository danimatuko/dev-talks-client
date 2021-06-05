import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../../../redux/auth/authActions";
import { getUsersPosts } from "../../../redux/profile/profileActions";
import DashboardTable from "../../dashborad/dashborad-table/DashboardTable";

const Dashboard = () => {
	const dispatch = useDispatch();
	const usersPosts = useSelector((state) => state.profile.usersPosts);
	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getLoggedInUser());
		dispatch(getUsersPosts());
	}, [dispatch]);

	return (
		<div className="container">
			<div className="d-inline-block">
				<h1 className="display-1 text-capitalize">Dashboard</h1>
				<h2 className="fs-5 text-capitalize">
					{userInfo && `Welcome ${userInfo.first_name} ${userInfo.last_name} `}
				</h2>
				<hr className="mt-0"/>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						{usersPosts.length ? (
							<DashboardTable />
						) : (
							<h3 className="text-secondary mt-2">
								You do not have any posts yet...
							</h3>
						)}
					</div>
					<div className="col-3"></div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
