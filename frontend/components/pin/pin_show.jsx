import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {

	componentDidMount() {
		this.props.fetchPin();
		// const id = this.props.match.params.postId;
		// this.props.fetchPost(id);
	}

	render() {
		const { pin, fetchPin } = this.props;
		return (
			<div>
				<div>
					<div className="pin-pic">
						<Link to={`/pins/${pin.id}`}></Link>
					</div>
					<h3>{pin.title}</h3>
					<h5>{pin.description}</h5>
					<h4>{pin.link}</h4>
					<Link to='/'>back to Index</Link>
				</div>				
			</div>
		);
	}
}

export default PinShow;