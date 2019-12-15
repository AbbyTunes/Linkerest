import React from "react";
import { Link } from "react-router-dom";
import BoardIndexItem from "./board_index_item";

class BoardIndex extends React.Component {

	componentDidMount() {
		this.props.fetchBoards();
	}

	render() {
		const { boards, removeBoard, removeItem } = this.props;
		
		const myBoards = boards.map((board) => {
			return (
				<div key={`board-${board.id}`} >
					<BoardIndexItem 
							board={board}
							removeBoard={removeBoard} 
							removeItem={removeItem}
						/>
				</div>
			);
		});

		
		
		if (boards.length) {
			return (
				<div className="board-frame">
					{myBoards}
				</div>
			) 
		} else {
			return(
				<div className="board-frame">
					<div className = "empty-board" >
						<div className="empty-text"> You don't have pins in this board yet</div>
						<Link to="/create-pin"><div className="upload-pin">Upload Pins</div></Link>
					</div>
				</div>
			)
		}
	}
}

export default BoardIndex;