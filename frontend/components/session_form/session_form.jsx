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
	}

	renderErrors() {
		const sessionErrors = this.props.errors.map((error, idx) => {
			return (
				<li className="errors" key={`error-${idx}`}>{ error }</li>
			)
		});

		return (
			<ul>
				{ sessionErrors }
			</ul>
		);
	}
	
	render() {
		
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						{this.renderErrors()}
					</div>
					<input className="session-input"
						type="text" 
						value={this.state.username} 
						placeholder="username"
						onChange={this.handleInput("username")} 
					/>
					<input className="session-input"
						type="password" 
						value={this.state.password} 
						placeholder="password"
						onChange={this.handleInput("password")} 
					/>
					<button type="submit" className="submit-session">{this.props.formType}</button>

				</form>
			</div>
		)
	}

}

export default SessionForm;