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
				<div>
					<BoardIndexItem key={`board-${board.id}`} board={board}
							removeBoard={removeBoard} removeItem={removeItem} />
				</div>
			);
		});

		return (
			<div className="board-frame">
				{myBoards}
			</div>
		)
	}
}

export default BoardIndex;