import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./AuthForm.module.css";
import { RiTodoLine } from "react-icons/ri";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	return (
		<div>
			<div className={classes.icon}>
				<RiTodoLine />
			</div>
			<section className={classes.auth}>
				<h1>{isLogin ? "Login" : "Sign Up"}</h1>
				<form>
					<div className={classes.control}>
						<label htmlFor="email">
							Email Address
						</label>
						<input
							type="email"
							id="email"
							placeholder="Your Email"
							required
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="password">
							Password
						</label>
						<input
							type="password"
							id="password"
							placeholder="Your passward"
							required
						/>
					</div>
					<div
						className={
							classes.password_change
						}
					>
						<Link
							className={
								classes.password_link
							}
							to="/changepassword"
						>
							Change Password ?
						</Link>
					</div>
					<div className={classes.actions}>
						<Link to="/taskspage">
							<button
								className={
									classes.login_button
								}
							>
								{isLogin
									? "Login"
									: "Create Account"}
							</button>
						</Link>
						<button
							type="button"
							className={
								classes.toggle
							}
							onClick={
								switchAuthModeHandler
							}
						>
							{isLogin
								? "Sign up a new account?"
								: "Login with existing account"}
						</button>
					</div>
				</form>
			</section>
			);
		</div>
	);
};

export default AuthForm;
