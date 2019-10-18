import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// const BoardIndexItem = ({ board }) => {
class BoardIndexItem extends React.Component {

	constructor(props) {
		super(props)
		this.removeBoard = this.removeBoard.bind(this);
	}

	removeBoard(e) {
	// handleSubmit(e) {
		e.preventDefault();

		const boardId = this.props.board.id;
		this.props.removeBoard(boardId)
		// .then(() => {
		// 	this.props.history.push("/my-boards")
		// });
	}

	render() {
		const { board, removeBoard } = this.props;
		return (
			<div className="board-link">
				<Link to={`/my-boards/${board.id}`}>
					{/* frontend route */}
					
					<div className="board-outer">

						<img src={board.boardPhoto} />

						<div className="board-info">

							<div className="board-left">
								<div className="board-title">{board.title}</div>
								<div className="pin-num">{board.itemIds.length} Pins</div>
							</div>
							
							<input type="submit" value="" onClick={ this.removeBoard } className="board-delete"/>

						</div>
					</div>
				</Link>
			</div>
		)
	}
};

export default withRouter(BoardIndexItem);