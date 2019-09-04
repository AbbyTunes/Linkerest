import React from "react";
import { connect } from "react-redux";
import {  } from "../../actions/session_actions";
import Pin from "./pin";

// ideally: show pins related to you when you logged in

// generally: show all the pins

const mapState = (state) => {
	const session = state.session;
	const users = state.entities.users;
	const pins = state.entities.pins;
	return { currentUser: users[session.id], pins }
};

const mapDispatch = (dispatch) => ({
	// logout: () => dispatch(logout())
});

export default connect(mapState, mapDispatch)(Pin);