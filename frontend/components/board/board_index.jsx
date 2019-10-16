import React from "react";
import { Link } from "react-router-dom";

import BoardIndexItem from "./board_index_item";
import CreateDropdown from "./create_dropdown";
// import PinIndex from "../pin/pin_index";
// import CreatePinContainer from "../pin/create_pin_container";
// import CreateBoardContainer from "./create_board_container";

class BoardIndex extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			tabName: "Boards"

		}
	}

	changeTab() {
		setState
	}
	componentDidMount() {
		this.props.fetchBoards();
	}

	render() {
		const { currentUser, boards, removeBoard, removeItem } = this.props;
		
		const myBoards = boards.map((board) => {
			return (
				<div>
					<BoardIndexItem key={`board-${board.id}`} board={board}
							removeBoard={removeBoard} removeItem={removeItem} />
				</div>
			);
		});

		return (
			<div className="board-canvas">
				<CreateDropdown />
				<div className="myName">{ currentUser.username }</div>
				
				<div className="dashboard-nav">
					<Board />
					<Link to="/my-boards"><span>Boards</span></Link>
					<a href="">Pins</a>
					<a href="">Hardcode</a>
					{/* <PinIndex /> */}
					{/* <span>Pins</span>  */}
					{/* <span>Topics</span> */}
					
				</div>

				<div className="board-frame">
					{myBoards}
				</div>
			</div>
		)
	}
}

export default BoardIndex;