import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapState = (state) => ({
	errors: state.errors.session,
	formType: 'login',
	navLink: <Link to="/signup">Need an account? Sign up now</Link>
});

const mapDispatch = (dispatch) => ({
	formAction: (user) => dispatch(login(user))
});

export default connect(mapState, mapDispatch)(SessionForm);