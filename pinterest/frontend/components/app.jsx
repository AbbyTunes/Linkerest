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
			<h2>Nav bar should go in the header?</h2>
			<br/>
			<h4>Nav only shows when logged_in</h4>
			<Link to="/">nav and boards "only shows nav when logged in"</Link>
		</header>

		<Switch>
			<ProtectedRoute path="/" component={NavBarContainer} />
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignupFormContainer} />
		</Switch>
	</div>
);
// home_index using one route "/"
// what if the home page needs to render different components 

export default App;
