import React from "react";

class DeleteBoard extends React.Component {

	constructor(props) {
		super(props)
		this.state = { showMenu: false }
		this.showMenu = this.showMenu.bind(this);
		this.hideMenu = this.hideMenu.bind(this);
		this.removeBoard = this.removeBoard.bind(this);
	}

	removeBoard(e) {
		e.preventDefault();
		const boardId = this.props.boardId;
		this.props.removeBoard(boardId);
	}

	showMenu() {
		this.setState({ showMenu: true })
	}

	hideMenu() {
		this.setState({ showMenu: false })
	}

	render() {
		return (
			<div className="create-dropdown">

				<div className="board-delete" onClick={this.showMenu}></div>

				{ this.state.showMenu ? (
					<div>
						<div className="modal" onClick={this.hideMenu}></div>
						<div className="delete-popup" onClick={this.removeBoard}>Delete Board</div>
					
					</div>
					) : (null)
				}
			</div>
		)
	}
}

export default DeleteBoard;
