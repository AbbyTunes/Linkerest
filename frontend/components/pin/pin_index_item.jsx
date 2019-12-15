import React from 'react';
import { Link } from 'react-router-dom';

class PinIndexItem extends React.Component {

	constructor(props) {
		super(props)
		// this.state = { boardId: null }
		this.handleInput = this.handleInput.bind(this);
		this.chompLink = this.chompLink.bind(this);
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
	// 			<p>you don't have Boards yet</p>
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

	chompLink() {

		let newLink = this.props.pin.link;

		if (newLink.startsWith("https://")) {
			newLink = newLink.slice(8);
		};

		if (newLink.endsWith(".com") && newLink.length > 22) {
			newLink = newLink.slice(0, -4);
		}

		if (newLink.length > 20) {
			newLink = newLink.slice(0, 20);
			newLink += "...";
		}
		return newLink;
	}

	render() {
		
		const { pin } = this.props;
		const shortLink = this.chompLink();

		return (
			<div className="pin-pic">

				<Link to={`/pins/${pin.id}`}>
					<img src={pin.photo}/>
				</Link>	

				<div className="pin-info">
					{/* {this.constructBoardSelection()} */}
					<a href={`${pin.link}`} className="pin-link" value={shortLink} ></a>
					<input type="submit" className="item-delete" value="" onClick={this.chompLink} />
				</div>

			</div>
		)
	}
};

export default PinIndexItem;



