import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {

	componentDidMount() {
		this.props.fetchPin();
	}

	render() {
		const { pin } = this.props;
		return (
			<div>
				<Link to='/'>
					<div className="back-button"></div>
				</Link>

				<div className="pin-canvas">
					<div className="pin-show">

						<img src={pin.photo} />
						<p className="link-to-pin">{pin.link}</p>
						<p className="pin-author">{pin.authorName}</p>
						
					</div>
				</div>					
			</div>
		);
	}
}

export default PinShow;