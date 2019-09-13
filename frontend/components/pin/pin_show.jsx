import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {

	componentDidMount() {
		this.props.fetchPin();
		// const id = this.props.match.params.postId;
		// this.props.fetchPost(id);
	}

	render() {
		const { pin } = this.props;
		// const authorId = pin.authorId;
		// const user = users[authorId];
		return (
			<div>
				<div className="pin-show">
					
					<h3>{pin.title}</h3>
					<h5>{pin.description}</h5>
					<h4>{pin.link}</h4>
					<h3>{pin.authorName}</h3>

					<Link to='/'>back to Index</Link>
				</div>				
			</div>
		);
	}
}

export default PinShow;