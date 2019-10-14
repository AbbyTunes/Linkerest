import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = ({ pin }) => {
	
	return (

		<div className="pin-pic">

			<Link to={`/pins/${pin.id}`}>

				<img src={pin.photo}/>

				<div className="shade"></div>

				<div className="pin-info">

					<div className="pin-option">
						<div className="white"><p>board_options</p></div>
						<div className="red"><p>save</p></div>
					</div>

					<div className="pin-link">{pin.link}</div>

				</div>
				
			</Link>

		</div>
)};

export default PinIndexItem;



