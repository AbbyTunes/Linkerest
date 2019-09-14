import React from "react";

class BoardShow extends React.Component {

	componentDidMount() {
		this.props.fetchBoard();
	}

	render() {
		// pins that belongs to that board
		// { board } = this.props;
		// debugger
		// const board = 
		return (
			<div>

			</div>
		)
	}

}

export default BoardShow;