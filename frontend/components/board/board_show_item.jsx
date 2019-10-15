import React from 'react';
import { Link } from 'react-router-dom';

const BoardShowItem = ({ item }) => {
	
	if (!item) {
		return null;
	}
	return (
		<div className="pin-pic">

			<Link to={`/pins/${item.id}`}>

				<img src={item.itemPhoto} />

				<div className="shade"></div>

				<div className="pin-info">

					<div className="pin-option">
						<div className="white">board_options</div>
						<div className="red">save</div>
					</div>

					<div className="pin-link">
						{item.link}
					</div>

				</div>

			</Link>

		</div>
	)
	// return (
	// 	<div>hasn't built ItemComponent</div>
	// )

}

export default BoardShowItem;


