import React from "react";
import BoardShowItem from "./board_show_item";
import { Link } from 'react-router-dom';

class BoardShow extends React.Component {

	componentDidMount() {
		this.props.fetchBoard();
		this.props.fetchBoards();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id != this.props.match.params.id) {
			this.props.fetchBoard();
		}
	}

	render() {

		const { board, boards, items, removeItem } = this.props;
		if (!items || !items.length) {
			return (
				<div>
					<div className="empty"> You don't have pins in this board yet</div>
					<Link to="/create-pin"><div>Upload Pins</div></Link>
				</div>
			)
		}

		const columns = [[], [], [], []];
		
		const colItems = items.map((item, idx) => {
			let bucket_idx = idx % 4;
			columns[bucket_idx].push(item);
		});

		const columnItems = columns.map((col, idx) => {
			return (
				<div className="col" key={`col-${idx}`} >
					{col.map((item) => {
						// uniq key is important
						return <BoardShowItem item={item} id={item.pinId} key={`item-${item.id}`} 
									boards={boards} removeItem={removeItem} />
					})}
				</div>
			)
		});

		return (
			<div className="pin-frame-canvas">
				<div className="grid">
					{columnItems}
				</div>
			</div>
			
		);
	}
}

export default BoardShow;