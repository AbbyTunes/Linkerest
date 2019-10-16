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

		// if (this.props.board) {
		// 	const itemIds = this.props.board.itemIds.map((itemId) => {
		// 		this.props.removeItem(itemId)
		// 	})
		// }

		const boardId = this.props.board.id;
		this.props.removeBoard(boardId)
		// .then(() => {
		// 	this.props.history.push("/my-boards")
		// });
	}

	render() {
		const { board, removeBoard } = this.props;
		return (
			<div>
				<Link to={`/my-boards/${board.id}`}>
					{/* frontend route */}
					
					<div className="board-outer">

						<img src={board.boardPhoto} />

						<div className="board-info">

							<div className="board-option">
								<div className="board-title">{board.title}</div>

								{/* <div className="edit-button">edit board</div> */}

								<button onClick={ this.removeBoard }>delete board itself</button>

								{/* <div onClick={() => removeBoardandItems()}>delete Board and its items</div> */}
							</div>

						</div>

					</div>
				</Link>
			</div>
		)
	}
};

export default withRouter(BoardIndexItem);

{/* <img src={board.photo} /> */}