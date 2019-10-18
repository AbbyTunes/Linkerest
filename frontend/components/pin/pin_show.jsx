import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {

	componentDidMount() {
		this.props.fetchPin();
	}

	render() {

		const { pin } = this.props;

		if (!pin) return null;
		
		return (
			<div className="pin-canvas">
				<Link to='/'>
					<div className="back-button"></div>
				</Link>

				<div className="pin-show">
					<img src={pin.photo} className="pin-left" />

					<div className="pin-right">
						<p className="link-to-pin">{pin.link}</p>
						<p className="pin-author">{pin.authorName}</p>
					</div>
				</div>					
			</div>
		);
	}
}

export default PinShow;