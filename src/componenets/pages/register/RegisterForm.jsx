import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { signUp, setLoadingUser } from "../../../redux/auth/authActions";
import registerSchema from "./registerSchema";

const RegisterForm = ({ history }) => {
	const isAuth = useSelector((state) => state.auth.isAuth);

	useEffect(() => {
		// redirect to hompage after sucsesseful register
		isAuth && history.push("/");
		// eslint-disable-next-line
	}, [isAuth]);

	const dispatch = useDispatch();

	// react-hook-form -> useForm hook
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(registerSchema)
	});

	// handle submit
	const onFormSubmit = (data, e) => {
		// set loader while fetching data
		dispatch(setLoadingUser());
		dispatch(signUp(data));
		// reset after form submit
		e.target.reset();
	};

	return (
		<div
			className="container d-flex flex-column justify-content-center"
			style={{ height: "70vh" }}>
			<div className="row">
				<div className="col"></div>
				<div className="col-lg-4 col-md-6">
					<div className="border border-dark rounded-1 p-5 bg-light">
						<h1 className="text-center">Sign up</h1>
						<form onSubmit={handleSubmit(onFormSubmit)}>
							<div className="mb-3  px-2">
								<label htmlFor="first_name" className="form-label">
									First Name
								</label>
								<input
									type="text"
									className="form-control"
									id="first_name"
									name="first_name"
									{...register("first_name")}
								/>
								<p className="text-danger ">{errors.first_name?.message}</p>
							</div>
							<div className="mb-3  px-2">
								<label htmlFor="last_name" className="form-label">
									Last Name
								</label>
								<input
									type="text"
									className="form-control"
									id="last_name"
									name="last_name"
									{...register("last_name")}
								/>
								<p className="text-danger ">{errors.last_name?.message}</p>
							</div>
							<div className="mb-3 px-2">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									type="text"
									className="form-control"
									id="email"
									name="email"
									{...register("email")}
								/>
								<p className="text-danger ">{errors.email?.message}</p>
							</div>
							<div className="mb-3  px-2">
								<label htmlFor="password" className="form-label">
									Password
								</label>
								<input
									type="text"
									className="form-control"
									id="password"
									name="password"
									{...register("password")}
								/>
								<p className="text-danger ">{errors.password?.message}</p>
							</div>
							<div className="mb-3  px-2">
								<label htmlFor="confirm_password" className="form-label">
									Confirm password
								</label>
								<input
									type="text"
									className="form-control"
									id="confirm_password"
									name="confirm_password"
									{...register("confirm_password")}
								/>
								<p className="text-danger ">{errors.confirm_password?.message}</p>
							</div>
							<button type="submit" className="btn btn-dark d-block m-auto">
								Submit
							</button>
						</form>
					</div>
				</div>
				<div className="col"></div>
			</div>
		</div>
	);
};

export default RegisterForm;
