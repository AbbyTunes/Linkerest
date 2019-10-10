import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { signup, login, CLEAR_SESSION_ERRORS } from "../../actions/session_actions";

class SignUpForm extends React.Component {

	componentWillUnmount() {
		this.props.clearup();
	}

	render() {
		const { errors, formType, formAction, demoLogin, clearup } = this.props;
		return (
			<div className="background">
				

				<div className="session">

					<div className="content">

						<div className="logo-session"> </div>
						<h1>Welcome to Pinterest</h1>
						<h4>find new ideas to try</h4>
						
						<div className="input-field">
							<SessionForm errors={errors} 
										formType={formType} 
										formAction={formAction} 
										/>
						</div>
						<div className="or">or</div>
						<button className="button" onClick={() => demoLogin({ username: "demo_user", password: "password" })} >Demo User Login</button>

						<div className="info-session">
							<Link to="/login" onClick={clearup}>Already a member? Log in</Link>
						</div>
						
					</div>
					
				</div>
				
			</div>
		)
	}
}

const mapState = (state) => ({
		errors: state.errors.session,
		formType: 'Sign up'
});

const mapDispatch = (dispatch) => ({
	formAction: (currentUser) => dispatch(signup(currentUser)),
	demoLogin: (currentUser) => dispatch(login(currentUser)),
	clearup: () => dispatch({ type: CLEAR_SESSION_ERRORS })
});

export default connect(mapState, mapDispatch)(SignUpForm);

