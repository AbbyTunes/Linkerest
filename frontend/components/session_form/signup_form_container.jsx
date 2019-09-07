import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { signup, clearup } from "../../actions/session_actions";

class SignUpForm extends React.Component {
	
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
							<Link to="/login" onSubmit={clearup}>Already a member? Log in</Link>
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
	formAction: (user) => dispatch(signup(user)),
	clearup: () => dispatch(clearup())
});

export default connect(mapState, mapDispatch)(SignUpForm);

