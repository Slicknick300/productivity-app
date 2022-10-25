import { Switch, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout/Layout";
import UserChangePassword from "./components/ChangePassword/UserChangePassword";
import AuthPage from "./pages/AuthPage";
//import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<WelcomePage />
				</Route>
				<Route path="/auth">
					<AuthPage />
				</Route>
				<Route path="/taskspage">
					<TasksPage />
				</Route>
				<Route path="/changepassword">
					<UserChangePassword />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
