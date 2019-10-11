import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute, ConditionalRoute } from "../util/route_util";

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import MainPageContainer from "./main_page/main_container";

const App = () => (
	<div>
		<ConditionalRoute path="/" component={NavBarContainer} />

		<Switch>
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignupFormContainer} />
			<Route path="/" component={MainPageContainer} />
			
		</Switch>
	</div>
);

export default App;
