import React from 'react';

class CreatePinForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = this.props.pin;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(field) {
		return (e) => this.setState({ [field]: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createPin(this.state);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="title" value={this.state.title} onChange={this.handleInput("title")} />
					<textarea value={this.state.description} onChange={this.handleInput("description")} />
					<input type="link" value={this.state.link} onChange={this.handleInput("link")} />
					<button type="submit">create Pin</button>
				</form>
			</div>
		);
	}
}

export default CreatePinForm;