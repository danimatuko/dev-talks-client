import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getLoggedInUser, logout } from "../../../redux/auth/authActions";
import { setEditMode } from "../../../redux/post/postActions";

const ProfileMenu = () => {
	useEffect(() => {
		dispatch(getLoggedInUser());
		// eslint-disable-next-line
	}, []);

	const history = useHistory();

	const { userInfo } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		history.push("/home");
	};

	return (
		<div className="nav-item dropdown">
			<button
				className="dropdown-toggle text-dark mx-1 border-0"
				id="dropdownMenuLink"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				<i className="fas fa-user-circle fa-2x"></i>
			</button>

			<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
				<li>
					<span className="dropdown-header">
						<h6 className="m-0 border-bottom">Hi {userInfo && userInfo.first_name}</h6>
					</span>
				</li>

				<li>
					<button className="dropdown-item" onClick={() => handleLogout()}>
						Logout
					</button>
				</li>
				<li>
					<Link
						className="dropdown-item"
						to="/posts/new-post"
						onClick={() => dispatch(setEditMode({ editMode: false }))}>
						Add Post
					</Link>
				</li>
				<li>
					<Link className="dropdown-item" to="/profile/dashboard">
						Dashboard
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default ProfileMenu;
