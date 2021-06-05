import { Switch, Route } from "react-router-dom";
import NewPost from "./componenets/pages/newPost/NewPost";
import NavBar from "./componenets/layout/navBar/NavBar";
import LoginForm from "./componenets/pages/login/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "./redux/auth/authActions";
import { useEffect } from "react";
import Dashboard from "./componenets/pages/dashboard/Dashboard";
import HomePage from "./componenets/pages/homepage/HomePage";
import RegisterForm from "./componenets/pages/register/RegisterForm";
import Toast from "./componenets/layout/toast/Toast";
import FullPost from "./componenets/posts/fullPost/FullPost";
import About from "./componenets/about/About";
import Footer from "./componenets/footer/Footer";
import ProtectedRoute from "./componenets/layout/protected-route/ProtectedRoute";
import ForbiddenPage from "./componenets/pages/error-page/ForbiddenPage";
import PageNotFound from "./componenets/pages/error-page/PageNotFound";



const App = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuth);
	useEffect(() => {
		dispatch(getLoggedInUser());
		// eslint-disable-next-line
	}, []);

	return (
		<div className="App">
			<NavBar />
			<Toast />
			<div style={{ minHeight: "65vh" }}>
				<Switch>
					<Route exact path={["/", "/home"]} component={HomePage} />
					<Route exact path="/about" component={About} />
					<Route exact path="/register" component={RegisterForm} />
					<Route exact path="/login" component={LoginForm} />
					<ProtectedRoute
						exact
						path="/profile/dashboard"
						isAuth={isAuth}
						component={Dashboard}
					/>
					<ProtectedRoute
						exact
						path={"/posts/new-post"}
						isAuth={isAuth}
						component={NewPost}
					/>
					<ProtectedRoute
						exact
						path={["/posts/new-post", "/posts/edit-post/:post_id"]}
						isAuth={isAuth}
						component={NewPost}
					/>
					<Route exact path="/posts/:post_id" component={FullPost} />
					<Route path="/forbbiden" component={ForbiddenPage} />
					<Route path="*" component={PageNotFound} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
};

export default App;
