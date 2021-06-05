import axios from "axios";
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
	first_name: Yup.string().required("First name is required"),
	last_name: Yup.string().required("Last name is required"),
	email: Yup.string()
		.test("isRegistered", "User already registered", async (value) => {
			const res = await axios.get("/users");
			const users = res.data;
			const user = users.find((user) => user.email === value);
			return user ? false : true;
		})
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Password must contain at leats 6 characters")
		.required("Password is required"),
	confirm_password: Yup.string()
		.required("Confirm Password is required")
		.oneOf([Yup.ref("password"), null], "Passwords must match")
});

export default registerSchema;
