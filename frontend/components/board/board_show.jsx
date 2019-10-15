import React from "react";

class BoardShow extends React.Component {

	constructor(props) {
		super(props)
		// this.state = {
		// 	board = 
		// }
		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.fetchBoard();
		this.props.fetchItems();
		this.props.fetchPins();
	}

	render() {

		const { currentUser, board, fetchBoard, fetchItems, removeItem, fetchPins, fetchPin } = this.props;
		debugger;
		const pins = this.props.pins;
		const boardPins = Object.values(board.pinIds).map((pinId) => {
			return ( <div>
					{pins[pinId]}
				</div> )
		})
		return (
			<div>
				{ boardPins }
			</div>
		)
	}
	
}

export default BoardShow;