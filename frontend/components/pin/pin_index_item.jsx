import React from 'react';
import { Link } from 'react-router-dom';

// const PinIndexItem = ({ pin }) => {

	// if (!pin.id) return null;
class PinIndexItem extends React.Component {

	constructor(props) {
		super(props)
		this.state = { boardId: null }
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(field) {
		return (e) => this.setState({ [field]: e.target.value })
	}

	constructBoardSelection() {
		// cannot re-pin to a board yet
		// need to change all the pins into items
		// in case to fetch title and description of an item
		const { boards } = this.props;

		const currentBoards = [];
		boards.forEach(board => currentBoards.push(board));

		if (currentBoards.length > 0 && currentBoards[0] && !this.state.boardId) {
			this.setState({ boardId: currentBoards[0].id })
		}

		if (boards.length === 0) {
			return (<div>
				<p>you don't have Boards yet</p>
				{/* <CreateBoardForm createBoard={CreateBoard} /> */}
			</div>)
		}

		let boardOptions;

		boardOptions = currentBoards.map(board => {
			return <option key={board.id} value={board.id}>{board.title}</option>
		})

		return (
			<div className="pin-option">
				<select className="white" value={this.state.boardId} onChange={this.handleInput("boardId")} >
					{boardOptions}
				</select>
				<button type="submit" className="red">Save</button>
			</div>
		)
	}

	render() {
		
		const { pin } = this.props;

		return (
			<div className="pin-pic">

				<Link to={`/pins/${pin.id}`}>

					<img src={pin.photo}/>

					<div className="shade"></div>

					<div className="pin-info">

						{this.constructBoardSelection()}

						<div className="pin-link">
							{pin.link}
						</div>
						
					</div>
					
				</Link>

			</div>
		)
	}
};

export default PinIndexItem;



