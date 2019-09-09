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

						<h1>Welcome to Pinterest</h1>
						
						<div className="botton-field">
							<SessionForm errors={errors} 
										formType={formType} 
										formAction={formAction} 
										// clearup={clearup}
										/>
							<h4>or</h4>
							<button className="button">Log in via Facebook</button>
							<button className="button">Log in via Google</button>	
						</div>
						<div className="info-session">
							<Link to="/signup" onClick={clearup}>Need an account? Sign up now</Link>
						</div>
						
					</div>
				</div>
			</div>

		)
	}
}

const mapState = (state) => ({
		errors: state.errors.session,
		formType: 'login'
});

const mapDispatch = (dispatch) => ({
	formAction: (user) => dispatch(login(user)),
	clearup: () => dispatch({ type: CLEAR_SESSION_ERRORS })
});

export default connect(mapState, mapDispatch)(LogInForm);
