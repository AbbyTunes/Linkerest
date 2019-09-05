import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

class LogInForm extends React.Component {

	render() {
		const { errors, formType, formAction } = this.props;
		return (
			<div className="background">

				<div className="session">

					<div className="content">

						<div className="logo-session"> </div>

						<h1>Welcome to Pinterest</h1>
						
						<div className="botton-field">
							<SessionForm errors={errors} formType={formType} formAction={formAction} />
							<h4>or</h4>
							<button className="button">Log in via Facebook</button>
							<button className="button">Log in via Google</button>	
						</div>
						<div className="info-session">
							<Link to="/signup">Need an account? Sign up now</Link>
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
	formAction: (user) => dispatch(login(user))
});

export default connect(mapState, mapDispatch)(LogInForm);
