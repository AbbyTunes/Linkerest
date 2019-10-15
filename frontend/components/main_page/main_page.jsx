import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute, ConditionalRoute } from "../../util/route_util";

import PinIndexContainer from "../pin/pin_index_container";
import PinShowContainer from "../pin/pin_show_container";
import CreatePinContainer from "../pin/create_pin_container";

import BoardIndexContainer from "../board/board_index_container";
import BoardShowContainer from "../board/board_show_container";
import CreateBoardContainer from "../board/create_board_container";

const MainPage = () => (
	<div className="main-page">
		<Switch>
			<ProtectedRoute exact path="/" component={PinIndexContainer} />
			<ProtectedRoute exact path="/my-boards" component={BoardIndexContainer} />

			<Route exact path="/pins/:id" component={PinShowContainer} />
			<Route exact path="/my-boards/:id" component={BoardShowContainer} />
			{/* <Route exact path="/pins/:pinId" component={PinShowContainer} />
			<Route exact path="/boards/:boardId" component={BoardShowContainer} /> */}

			<ProtectedRoute exact path="/create-pin" component={CreatePinContainer} />
			<ProtectedRoute exact path="/create-board" component={CreateBoardContainer} />

			<Route exact path='/*' render={() => <Redirect to={{ pathname: "/" }} />} />
		</Switch>
	</div>
);

export default MainPage;


