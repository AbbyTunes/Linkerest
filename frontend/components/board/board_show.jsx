import React from "react";

class BoardShow extends React.Component {

	componentDidMount() {
		this.props.fetchBoard();
	}

	render() {

		const { board, items } = this.props;
		if (!board) {
			return null;
		}

		const pinItems = items.map((item) => {
			return <div>hasn't built ItemComponent</div>
			// return <ItemIndividual item={item} /> 
		})

		return (
			<div>
				{ pinItems }
			</div>
		)
	}
	
}

export default BoardShow;

import React from "react";
import BoardShowItem from "./board_show_item";

class BoardShow extends React.Component {

	componentDidMount() {
		this.props.fetchBoard();
	}

	render() {

		const { board, items } = this.props;
		if (!board) {
			return null;
		}

		const pinItems = items.map((item, idx) => {
			return <BoardShowItem item={item} key={`item-${ idx }`} />
		})

		return (
			<div>
				{pinItems}
			</div>
		)
	}

}

export default BoardShow;