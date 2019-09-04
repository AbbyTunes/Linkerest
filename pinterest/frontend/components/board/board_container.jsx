import React from "react";
import { connect } from "react-redux";
import { } from "../../actions/session_actions";
import Board from "./board";

// show boards belongs to me when in route "my_dashboard"

const mapState = (state) => {
	const session = state.session;
	const users = state.entities.users;
	const boards = state.entities.boards;
	return { currentUser: users[session.id], boards }
};

const mapDispatch = (dispatch) => ({
	// logout: () => dispatch(logout())
});

export default connect(mapState, mapDispatch)(Board);