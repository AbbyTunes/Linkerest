import React from 'react';
import { Link } from 'react-router-dom';

class BoardShowItem extends React.Component {

	constructor(props) {
		super(props)
		// this.state = { shortLink: this.props.item.link }
		this.removeItemfromBoard = this.removeItemfromBoard.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.chompLink = this.chompLink.bind(this);
		// this.handleFile = this.handleFile.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(field) {
		return (e) => this.setState({ [field]: e.target.value })
	}

	chompLink() {
		// const { shortLink } = this.state; 
		// cannot use setState

		let newLink = this.props.item.link;
		if (newLink.startsWith("https://")) {
			// console.log("chomp https");
			newLink = newLink.slice(8);
		};

		if ( newLink.endsWith(".com") && newLink.length > 24 ) {
			// console.log("chomp .com");
			newLink = newLink.slice(0, -4);
		}

		// if (newLink.startsWith("www.") && newLink.length > 24) {
		// 	console.log("chomp www.");
		// 	newLink = newLink.slice(4);
		// };

		if ( newLink.length > 20 ) {
			newLink = newLink.slice(0, 20);
			newLink += "...";
		}
		return newLink;
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
		const shortLink = this.chompLink();
		return (
			<div className="pin-pic">

				<Link to={`/pins/${id}`}>
					<img src={item.photo} />
				</Link>

				<div className="pin-info">
					{/* {this.constructBoardSelection()} */}

					<a href={`${item.link}`} className="pin-link" value={ shortLink } >
						<div></div>
					</a>					

					<input type="submit" className="item-delete" value="" onClick={this.removeItemfromBoard} />
				</div>
			</div>
		)
	}
	
}

export default BoardShowItem;


