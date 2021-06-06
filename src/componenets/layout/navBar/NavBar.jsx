import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileMenu from "../profileMenu/ProfileMenu";

const NavBar = () => {
	const { isAuth, isLoading } = useSelector((state) => state.auth);

	return (
		<nav
			className="navbar navbar-expand-lg mb-5 sticky-top navbar-light"
			style={{ backgroundColor: "#eee" }}>
			<div className="container">
				<Link className="navbar-brand text-light bg-dark px-3 " to="/">
					<div className="d-inline">DEV</div>
					<small className="" style={{ fontSize: "0.7rem" }}>
						Talks
					</small>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link text-dark active" to="/home">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-dark " to="/about">
								About
							</Link>
						</li>
					</ul>
					{!isLoading && isAuth ? (
						<ProfileMenu />
					) : (
						<>
							<li className="nav-item  ">
								<Link
									className="nav-link text-dark border border-dark rounded-3 mx-1"
									to="/register">
									Sign-up
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link text-dark border border-dark rounded-3 mx-1"
									to="/login">
									Login
								</Link>
							</li>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
