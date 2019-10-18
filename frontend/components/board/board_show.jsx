import React from "react";
import BoardShowItem from "./board_show_item";
// import PinIndexItem from "../pin/pin_index_item";

class BoardShow extends React.Component {

	componentDidMount() {
		this.props.fetchBoard();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id != this.props.match.params.id) {
			this.props.fetchBoard();
		}
	}

	render() {

		const { board, items, removeItem } = this.props;
		if (!items || !items.length) return null;

		const columns = [[], [], [], [], []];
		const colItems = items.map((item, idx) => {
			let bucket_idx = idx % 5;
			columns[bucket_idx].push(item);
		});

		const columnItems = columns.map((col, idx) => {
			return (
				<div className="col" key={`col-${idx}`} >
					{col.map((item) => {
						
						return <BoardShowItem item={item} key={`item-${idx}`} removeItem={removeItem} />
						// return <PinIndexItem pin={item} key={`item-${idx}`} />
					})}
				</div>
			)
		});

		return (
			<div className="grid">
				{columnItems}
			</div>
		);
	}
}

export default BoardShow;