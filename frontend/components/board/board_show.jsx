import React from "react";
import BoardShowItem from "./board_show_item";
import { Link } from 'react-router-dom';

class BoardShow extends React.Component {

	constructor(props) {
		super(props)
		// this.state = { itemLength: this.props.board.itemIds.length }
	}

	componentDidMount() {
		this.props.fetchBoard();
		// this.props.fetchBoards();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id != this.props.match.params.id) {
			this.props.fetchBoard();
		}
		// if (this.props.board.itemIds.length !== this.props.items.length ) {
		// 	this.props.fetchBoard();
		// }
	}

	render() {

		const { board, items, removeItem } = this.props;
		// don't need boards yet
		let emptyPin;
		if (!items || !items.length) {
			emptyPin = (
				<div className="empty-board">
					<div className="empty-text"> You don't have pins in this board yet</div>
					<Link to="/create-pin"><div className="upload-pin">Upload Pins</div></Link>
				</div>
			)
		} else {
			emptyPin = null;
		}

		let boardName;
		if ( board && board.title ) {
			boardName = (
				<div className="board-profile">
					<div className="boardName myName">{board.title}</div>
				</div>
			)
		} else {
			boardName = null;
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
						// uniq key is important  // don't need to select boards={boards} 
						return <BoardShowItem item={item} id={item.pinId} 
									key={`item-${item.id}`} 
									removeItem={removeItem} />
					})}
				</div>
			)
		});

		return (

			<div className="board-canvas">
				
				{ boardName }
				<div className="board-frame">
					{ emptyPin }

					<div className="pin-frame-canvas">
						<div className="grid">
							{columnItems}
						</div>
					</div>
				</div>
				
			</div>
			
		);
	}
}

export default BoardShow;