import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute, ConditionalRoute } from "../util/route_util";

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";

import PinIndexContainer from "./pin/pin_index_container";
import PinShowContainer from "./pin/pin_show_container";
import CreatePinContainer from "./pin/create_pin_container";

import BoardIndexContainer from "./board/board_index_container";
import BoardShowContainer from "./board/board_show_container";
import CreateBoardContainer from "./board/create_board_container";

const App = () => (
	<div>
		<ConditionalRoute path="/" component={NavBarContainer} />
		

		<Switch>
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignupFormContainer} />

			<ProtectedRoute exact path="/" component={PinIndexContainer} />
			<ProtectedRoute exact path="/boards" component={BoardIndexContainer} />

			<Route exact path="/pins/:pinId" component={PinShowContainer} />
			{/* <Route exact path="/boards/:boardId" component={BoardShowContainer} /> */}

			<ProtectedRoute exact path="/create-pin" component={CreatePinContainer} />
			{/* <ProtectedRoute exact path="/create-board" component={CreateBoardContainer} /> */}
			
		</Switch>
	</div>
);

export default App;
