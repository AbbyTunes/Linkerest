import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import DeleteBoard from './delete_board';

class BoardIndexItem extends React.Component {

	constructor(props) {
		super(props)
		this.removeBoard = this.removeBoard.bind(this);
	}

	removeBoard(e) {
		e.preventDefault();

		const { board } = this.props;

		if ( board && board.itemIds.length ) {
			board.itemIds.forEach((itemId) => {
				this.props.removeItem(itemId);
				// console.log(`delete ${itemId}`);
			});
			// console.log("successfully deleted items")
		} 
		// else {
		// 	console.log("no items")
		// }
		const boardId = this.props.board.id;
		this.props.removeBoard(boardId);
		// console.log("successfully deleted board");

	}

	render() {
		const { board } = this.props;
		// console.log(board.itemIds);

		return (
			<div className="board-link" key={`board-${board.id}`} >
				<Link to={`/my-boards/${board.id}`}>
					
					<div className="board-outer">

						<div className="board-thumbnail-frame">
							<img className="board-thumbnail-img" src={board.boardPhoto} />
						</div>

						<div className="board-info">

							<div className="board-left">
								<div className="board-title">{board.title}</div>
								<div className="pin-num">{board.itemIds.length} Pins</div>
							</div>

							<div className="board-right">
								<div className="board-delete" onClick={this.removeBoard} >
								</div>
							</div>
						</div>
					</div>

				</Link>
				
			</div>
		)
	}
};

export default withRouter(BoardIndexItem);