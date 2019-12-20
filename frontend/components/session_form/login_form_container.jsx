import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login, CLEAR_SESSION_ERRORS } from "../../actions/session_actions";
import SessionForm from "./session_form";

class LogInForm extends React.Component {

	componentWillUnmount() {
		this.props.clearup();
	}

	render() {
		const { errors, formType, formAction, clearup } = this.props;
		return (
			<div className="background">

				<div className="session">

					<div className="content">

						<div className="logo-session"> </div>

						<h1>Welcome back</h1>
						
						<div className="input-field">
							<SessionForm errors={errors} 
										formType={formType} 
										formAction={formAction} 
										/>
							
							<div className="or">or</div>
							<button className="button" onClick={ () => formAction({ username: "demo_user", password: "password"}) } >Demo User Login</button>
							<div className="info-session">
								<Link to="/signup" onClick={ clearup }>Need an account? Sign up now</Link>
							</div>
						</div>
						
						
					</div>
				</div>
			</div>

		)
	}
}

const mapState = (state) => ({
		errors: state.errors.session,
		formType: 'Log in'
});

const mapDispatch = (dispatch) => ({
	formAction: (currentUser) => dispatch(login(currentUser)),
	clearup: () => dispatch({ type: CLEAR_SESSION_ERRORS })
});

export default connect(mapState, mapDispatch)(LogInForm);
