import React from "react";
import { Link } from "react-router-dom";

import BoardIndexItem from "./board_index_item";
// import CreatePinContainer from "../pin/create_pin_container";
// import CreateBoardContainer from "./create_board_container";

class BoardIndex extends React.Component {

	componentDidMount() {
		this.props.fetchBoards();
	}

	render() {
		// currentUser.username
		// profile pic
		// create Pin/Board
		// share button

		// return ( <div> </div> )

		const { currentUser, boards, removeBoard } = this.props;
		
		const myBoards = boards.map((board) => {
			
			return (
				<div>
					<BoardIndexItem key={board.id} board={board} />
				</div>
			);
		});

		return (
			<div className="board-canvas">

				<div className="create">
					<div className="create-option">
						<Link to="/create-pin">Create Pin</Link>
						<Link to="/create-board">Create Board</Link>
					</div>
				</div>

				<div className="myName">{ currentUser.username }</div>
				
				<div className="dashboard-nav">
					<a href="">Boards</a>
					<a href="">Pins</a>
					<a href="">Topics</a>
					<a href="">Hardcode</a>
				</div>

				<div className="board-frame">
					{myBoards}
				</div>
			</div>
		)
	}
}

export default BoardIndex;