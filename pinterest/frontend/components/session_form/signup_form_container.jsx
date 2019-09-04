import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";

const mapState = (state) => ({
	errors: state.errors.session,
	formType: 'signup',
	navLink: <Link to="/login">log in instead</Link>
});

const mapDispatch = (dispatch) => ({
	formAction: (user) => dispatch(signup(user))
});

export default connect(mapState, mapDispatch)(SessionForm);