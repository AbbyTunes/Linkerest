import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {

	// constructor(props) {
	// 	super(props)
	// 	this.handleBack = this.handleBack.bind(this)
	// }

	componentDidMount() {
		this.props.fetchPin();
	}

	// two component use this pin_show page
	// cannot go back to the previous page yet
	// handleBack() {
	// 	this.props.history.push('/my-boards');
	// }

	render() {

		// cannot adjust to different screen sizes
		// hover onto the img, should have a transparent div
		// click on the img, link to the destination link

		const { pin } = this.props;
		if (!pin) return null;
		
		return (
			<div className="pin-canvas">
				<Link to='/'>
					<div className="back-button"></div>
					{/* <div className="back-button" onClick={this.handleBack}></div> */}
				</Link>
			
				<div className="pin-show">
					<img src={pin.photo} className="pin-left" />

					<div className="pin-right">
						<div className="pin-option">
							<div className="white board-text">Board options</div>
							<button type="submit" className="red">Save</button>
						</div>
						{/* <p className="link-to-pin">{pin.link}</p> */}
						<div className="upload">
							
							<div className="upload-by">Uploaded by </div> 
							<div className="upload-name">{pin.authorName}</div>
						</div>
						
						<div className="pin-author">
							<div className="author-profile"></div>
							<div className="author-name">{pin.authorName}</div>
							<div className="author-follow">follow</div>
						</div>
						
					</div>
				</div>					
			</div>
		);
	}
}

export default PinShow;