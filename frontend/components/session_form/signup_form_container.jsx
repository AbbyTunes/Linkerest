import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { signup, CLEAR_SESSION_ERRORS } from "../../actions/session_actions";

class SignUpForm extends React.Component {

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
						<h4>find new ideas to try</h4>
						
						<div className="botton-field">
							<SessionForm errors={errors} 
										formType={formType} 
										formAction={formAction} 
										// clearup={clearup} 
										/>
						</div>
						
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
		formType: 'signup'
});

const mapDispatch = (dispatch) => ({
	formAction: (currentUser) => dispatch(signup(currentUser)),
	clearup: () => dispatch({ type: CLEAR_SESSION_ERRORS })
});

export default connect(mapState, mapDispatch)(SignUpForm);

