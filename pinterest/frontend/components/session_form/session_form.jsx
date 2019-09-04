import React from "react";

class SessionForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(field) {
		return e => this.setState({ [field]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.formAction(this.state);
	}

	// hope the username only shows when signup, but not login 
	render() {
		return (
			<div>
				<form>

					<label>
						Username: 
						<input type="text" 
							value={this.state.username} 
							onChange={this.handleInput("username")} 
						/>
					</label>

					<br/>
					<label>
						Email:
						<input type="text" 
							value={this.state.email} 
							onChange={this.handleInput("email")} 
						/>
					</label>

					<br />
					<label>
						password:
						<input type="password" 
							value={this.state.password} 
							onChange={this.handleInput("password")} 
						/>
					</label>
					<br />
					<button type="submit" value={this.props.formType}></button>

				</form>
			</div>
		)
	}

}

export default SessionForm;