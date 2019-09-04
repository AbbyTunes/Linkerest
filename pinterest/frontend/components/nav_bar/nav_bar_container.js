import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from "./nav_bar";

const mapState = (state) => {
	const session = state.session;
	const users = state.entities.users;
	return { currentUser: users[session.id] }
};

const mapDispatch = (dispatch) => ({
	logout: () => dispatch(logout())
});

export default connect(mapState, mapDispatch)(NavBar);