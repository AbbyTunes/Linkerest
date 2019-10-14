import React from 'react';

class CreateBoardForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = this.props.board;
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(field) {
		return (e) => this.setState({ [field]: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createBoard(this.state);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="title" value={this.state.title} onChange={this.handleInput("title")} />
					<input type="description" value={this.state.description} onChange={this.handleInput("description")} />
					choose isPrivate
					<button type="submit">create Board</button>
				</form>
			</div>
		);
	}
}

export default CreateBoardForm;