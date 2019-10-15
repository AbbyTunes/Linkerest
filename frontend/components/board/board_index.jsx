import React from "react";
import { Link } from "react-router-dom";

import BoardIndexItem from "./board_index_item";
import CreateDropdown from "./create_dropdown";
// import CreatePinContainer from "../pin/create_pin_container";
// import CreateBoardContainer from "./create_board_container";

class BoardIndex extends React.Component {

	componentDidMount() {
		this.props.fetchBoards();
	}

	render() {
		const { currentUser, boards, removeBoard } = this.props;
		
		const myBoards = boards.map((board) => {
			// debugger;
			return (
				<div>
					<BoardIndexItem key={board.id} board={board} />
				</div>
			);
		});

		return (
			<div className="board-canvas">
				<CreateDropdown />
				<div className="myName">{ currentUser.username }</div>
				
				<div className="dashboard-nav">
					<Link to="/my-boards">Boards</Link>
					{/* <a href="">Boards</a> */}
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