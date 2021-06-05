import React from "react";

const Footer = () => {
	return (
		<footer
			className="fixed bottom-0  mt-5 p-5"
			style={{ height: "190px", backgroundColor: "#212429" }}>
			<div className="container">
				<div className="mx-auto" style={{ width: "10%" }}>
					<ul
						className="social d-flex justify-content-around w-100 p-0"
						style={{ listStyle: "none", width: "15%" }}>
						<a
							href="https://www.linkedin.com/in/dani-matuko/"
							target="_blank"
							rel="noreferrer">
							<li>
								<i className="fab fa-linkedin-in fa-2x text-light"></i>
							</li>
						</a>
						<a href="https://github.com/danimatuko" target="_blank" rel="noreferrer">
							<li>
								<i className="fab fa-twitter fa-2x text-light"></i>
							</li>
						</a>
						<a href="/" target="_blank" rel="noreferrer">
							<li>
								<i className="fab fa-instagram fa-2x text-light"></i>
							</li>
						</a>
					</ul>
				</div>
				<div className="text-light text-center">
					<p className="text-light"> www.dev-talks.com</p>
					<div>© 2021 Dani Matuko</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
