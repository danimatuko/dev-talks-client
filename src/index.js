import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

ReactDOM.render(
	<Provider store={store()}>
		<Router>
			<App />
		</Router>
	</Provider>,

	document.getElementById("root")
);
