import React from "react";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (message) => toast.dark(message);

const Toast = () => {
	const { isVisible, message } = useSelector((state) => state.toast);
	isVisible && notify(message);

	return (
		<div>
			<ToastContainer autoClose={3000} />
		</div>
	);
};

export default Toast;
