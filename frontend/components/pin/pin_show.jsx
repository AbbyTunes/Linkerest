import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {

	constructor(props) {
		super(props)
	// 	this.handleBack = this.handleBack.bind(this)
	}

	componentDidMount() {
		this.props.fetchPin();
	}

	handleSubmit() {
		
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

						<div className="upload">
							<div className="upload-by">Uploaded by </div> 
							<div className="upload-name">{pin.authorName}</div>
						</div>
						
						<div className="pin-author">
							<div className="author-profile"></div>
							<div className="author-name">{pin.authorName}</div>
							<div className="delete-pin">Delete Pin</div>
							<Link to={`${pin.link}`}><div className="link-to">{pin.link}</div></Link>
						</div>
						
					</div>
				</div>					
			</div>
		);
	}
}

export default PinShow;