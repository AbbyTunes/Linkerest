import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute, ConditionalRoute } from "../util/route_util";

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

import NavBarContainer from "./nav_bar/nav_bar_container";
import PinContainer from "./pin/pin_container";


const App = () => (
	<div>
		<ConditionalRoute path="/" component={NavBarContainer} />
		<Route path="/" component={PinContainer} />

		<Switch>
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignupFormContainer} />
		</Switch>
	</div>
);
// home_index using one route "/"
// what if the home page needs to render different components 

export default App;
