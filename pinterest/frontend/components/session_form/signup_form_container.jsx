import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";



const mapState = (state) => ({
	errors: state.errors.session,
	formType: 'signup',
	navLink: <Link to="/login">Already a member? Log in</Link>
});

const mapDispatch = (dispatch) => ({
	formAction: (user) => dispatch(signup(user))
});

export default connect(mapState, mapDispatch)(SessionForm);