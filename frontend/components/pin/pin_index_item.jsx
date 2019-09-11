import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = ({ pin }) => {
	
	return (
	<div>
		<div className="pin-pic">

			<Link to={`/pins/${pin.id}`}>

				<img src={pin.photo}/>

				<div className="grey"></div>

				<div className="pin-info">

					<div className="board-frame">
						<div className="white"><p>v</p></div>
						<div className="red"><p>save</p></div>
					</div>

					<div className="pin-link">{pin.link}</div>

				</div>
				
			</Link>

		</div>

	</div>
)};

export default PinIndexItem;



