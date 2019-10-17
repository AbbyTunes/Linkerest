import React from "react";
import { Link } from "react-router-dom";

import BoardIndexItem from "./board_index_item";
// import CreateDropdown from "./create_dropdown";

class BoardIndex extends React.Component {

	componentDidMount() {
		this.props.fetchBoards();
	}

	render() {
		const { boards, removeBoard, removeItem } = this.props;
		
		const myBoards = boards.map((board, idx) => {
			return (
				<div>
					<BoardIndexItem key={idx} board={board}
							removeBoard={removeBoard} removeItem={removeItem} />
				</div>
			);
		});

		return (
			<div className="board-frame">
				{myBoards}
			</div>
				
			// <div className="board-canvas">
			// 	<CreateDropdown />
			// 	<div className="myName">{ currentUser.username }</div>
				
			// 	<div className="dashboard-nav">
			// 		<Link to="/my-boards"><span>Boards</span></Link>
			// 		<a href="">Pins</a>
			// 		<a href="">Hardcode</a>
			// 		{/* <PinIndex /> */}
			// 		{/* <span>Pins</span>  */}
			// 		{/* <span>Topics</span> */}
		)
	}
}

export default BoardIndex;