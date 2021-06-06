const checkEnvironment = () => {
	if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
		return process.env.REACT_APP_DEV_DOMAIN;
	} else {
		return process.env.REACT_APP_PROD_DOMAIN;
	}
};

export default checkEnvironment;
