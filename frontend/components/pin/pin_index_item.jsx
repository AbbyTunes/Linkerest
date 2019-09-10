import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = ({ pin, users }) => {
	
	const authorId = pin.authorId;
	const user = users[authorId];
	return (
	<div>
		<div className="pin-pic">
			<Link to={`/pins/${pin.id}`}>
				<img src={pin.photo} alt={pin.title}/>
				<h3>{pin.title}</h3>
				<h5>{pin.description}</h5>
				<h4>{pin.link}</h4>
			</Link>
		</div>
		
	</div>
)};

export default PinIndexItem;



