import React from "react";

class SessionForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(field) {
		return e => this.setState({ [field]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state)
		this.props.formAction(user);
		// why assign object
		// after submit, how to redirect to the index_page?
	}

	renderErrors() {
		const sessionErrors = this.props.errors.map((error, idx) => {
			return (
				<li key={`error-${idx}`}>{ error }</li>
			)
		});

		return (
			<ul>
				{ sessionErrors }
			</ul>
		);
	}

	// hope the username only shows when signup, but not login 
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<br/>
					<p>Please {this.props.formType} or {this.props.navLink}</p>
					<div>{this.renderErrors()}</div>
					<br/>

					<label>
						Username: 
						<input type="text" 
							value={this.state.username} 
							onChange={this.handleInput("username")} 
						/>
					</label>

					<br/>
					<label>
						Password:
						<input type="password" 
							value={this.state.password} 
							onChange={this.handleInput("password")} 
						/>
					</label>
					<br/>
					<button type="submit" >{this.props.formType}</button>

				</form>
			</div>
		)
	}

}

export default SessionForm;