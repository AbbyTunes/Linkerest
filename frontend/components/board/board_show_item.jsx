import React from 'react';
import { Link } from 'react-router-dom';

class BoardShowItem extends React.Component {

	constructor(props) {
		super(props)
		// this.state = { boardId: null }
		this.removeItemfromBoard = this.removeItemfromBoard.bind(this);
		this.handleInput = this.handleInput.bind(this);
		// this.handleFile = this.handleFile.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(field) {
		return (e) => this.setState({ [field]: e.target.value })
	}

	// constructBoardSelection() {
	// 	const { boards } = this.props;

	// 	const currentBoards = [];
	// 	boards.forEach(board => currentBoards.push(board));

	// 	if (currentBoards.length > 0 && currentBoards[0] && !this.state.boardId) {
	// 		this.setState({ boardId: currentBoards[0].id })
	// 	}

	// 	if (boards.length === 0) {
	// 		return (<div>
	// 			<div className="empty">you don't have Boards yet</div>
	// 			{/* <CreateBoardForm createBoard={CreateBoard} /> */}
	// 		</div>)
	// 	}

	// 	let boardOptions;

	// 	boardOptions = currentBoards.map(board => {
	// 		return <option key={board.id} value={board.id}>{board.title}</option>
	// 	})

	// 	return (
	// 		<div className="pin-option">
	// 			<select className="white" value={this.state.boardId} onChange={this.handleInput("boardId")} >
	// 				{boardOptions}
	// 			</select>
	// 			<button type="submit" className="red">Save</button>
	// 		</div>
	// 	)
	// }

	removeItemfromBoard(e) {
		e.preventDefault();
		const itemId = this.props.item.id;
		this.props.removeItem(itemId)
	}

	render() {
		const { item, id } = this.props;
		return (
			<div className="pin-pic">

				<Link to={`/pins/${id}`}>

					<img src={item.photo} />

					<div className="pin-info">
						{/* {this.constructBoardSelection()}

						<div className="pin-link">
							{item.link}
						</div> */}

						<input type="submit" value="" onClick={this.removeItemfromBoard} className="item-delete" />
					</div>

				</Link>

			</div>
		)
	}
	
}

export default BoardShowItem;


