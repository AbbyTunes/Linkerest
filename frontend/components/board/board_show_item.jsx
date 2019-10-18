import React from 'react';
import { Link } from 'react-router-dom';

// const BoardShowItem = ({ item }) => {

class BoardShowItem extends React.Component {

	constructor(props) {
		super(props)
		this.removeItemfromBoard = this.removeItemfromBoard.bind(this);
	}

	removeItemfromBoard(e) {
		e.preventDefault();

		const itemId = this.props.item.id;
		this.props.removeItem(itemId)
		// .then(() => {
		// 	this.props.history.push("/my-boards")
		// });
	}

	render() {
		const { item } = this.props;

		return (
			<div className="pin-pic">

				<Link to={`/pins/${item.pinId}`}>

					<img src={item.photo} />

					{/* <div className="shade"></div> */}

					<div className="pin-info">

						<div className="pin-option">
							<div className="white">board_options</div>
							<div className="red">save</div>
						</div>

						<div className="pin-link">
							{item.link}
						</div>

						<input type="submit" value="" onClick={this.removeItemfromBoard} className="item-delete" />

					</div>

				</Link>

			</div>
		)
	}
	
}

export default BoardShowItem;


