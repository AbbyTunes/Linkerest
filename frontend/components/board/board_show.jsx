import React from "react";

class BoardShow extends React.Component {

	componentDidMount() {
		this.props.fetchBoard();
	}

	render() {

		const { board, items } = this.props;
		debugger;
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