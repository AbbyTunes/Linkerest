import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
// import BoardContainer from "./board/";
// import PinContainer from "./pin/";


const App = () => (
	<div>
		<header>
			<h1>Pinterest</h1>
			<Route path="/" component={NavBarContainer} />
		</header>
		<h1>App Routes here</h1>

		<Route exact path="/login" component={LoginFormContainer} />
		<Route exact path="/signup" component={SignupFormContainer} />
	</div>
);

export default App;

	// <header>
	// 		<Link to="/"></Link>
	// 		<Rount path="/" />
			
	// 	</header>