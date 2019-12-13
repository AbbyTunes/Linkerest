import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DeleteBoard from './delete_board';

// const BoardIndexItem = ({ board }) => {
class BoardIndexItem extends React.Component {

	constructor(props) {
		super(props)
		this.removeBoard = this.removeBoard.bind(this);
		this.state = { showMenu: false }
		this.showMenu = this.showMenu.bind(this);
		this.hideMenu = this.hideMenu.bind(this);
	}

	showMenu() {
		this.setState({ showMenu: true })
	}

	hideMenu() {
		this.setState({ showMenu: false })
	}

	removeBoard(e) {
		e.preventDefault();
		const boardId = this.props.board.id;
		this.props.removeBoard(boardId)
	}

	render() {
		const { board, removeBoard } = this.props;
		return (
			<div className="board-link" >
				<Link to={`/my-boards/${board.id}`}>
					
					<div className="board-outer">

						<img src={board.boardPhoto} />

						<div className="board-info">

							<div className="board-left">
								<div className="board-title">{board.title}</div>
								<div className="pin-num">{board.itemIds.length} Pins</div>
							</div>

							<div className="board-right">
								{/* <div className="board-delete" onClick={this.removeBoard} ></div> */}
								
								{/* <div className="board-delete" onClick={this.showMenu} ></div> */}

								{/* { this.state.showMenu ? (
									<div>
										<div className="modal" onClick={this.hideMenu}></div>
										<div className="delete-popup" onClick={this.removeBoard}>Delete Board</div>

									</div>
									) : (null)
								} */}
							</div>
						</div>
					</div>
					

					{/* <input type="submit" value="" onClick={ this.removeBoard } className="board-delete"/> */}

				</Link>
				
			</div>
		)
	}
};

export default withRouter(BoardIndexItem);