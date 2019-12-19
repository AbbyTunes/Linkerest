import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {

	constructor(props) {
		super(props)
		// this.state = { boardId: this.props.item.boardId }
		this.handleSubmit = this.handleSubmit.bind(this);
		this.chompLink = this.chompLink.bind(this);
	}

	componentDidMount() {
		this.props.fetchPin();
	}

	handleSubmit(e) {
		e.preventDefault();
		const { id , currentUser } = this.props;
		this.props.removeItem(id);
		this.props.removePin(id);
		// straight to main page
		// this.props.history.push(`/my-boards/${this.state.boardId}`);
	}

	chompLink() {		
		let newLink = this.props.pin.link;

		if (!newLink.length) {
			newLink = "no link yet"
		}
		if (newLink.startsWith("https://")) {
			newLink = newLink.slice(8);
		};

		if (newLink.startsWith("http://")) {
			newLink = newLink.slice(7);
		};

		if (newLink.endsWith(".com") && newLink.length > 24) {
			newLink = newLink.slice(0, -4);
		}

		// if (newLink.startsWith("www.") && newLink.length > 24) {
		// 	console.log("chomp www.");
		// 	newLink = newLink.slice(4);
		// };

		if (newLink.length > 20) {
			newLink = newLink.slice(0, 20);
			newLink += "...";
		}
		return newLink;
	}

	render() {
		const { pin } = this.props;
		if (!pin) return null;

		const shortLink = this.chompLink();
		
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
							<input type="submit" value="Delete Pin" onClick={this.handleSubmit} className="delete-pin" />
							{/* <div className="delete-pin">Delete Pin</div> */}
							<a href={`${pin.link}`} value={shortLink} className="link-to" ></a>
						</div>
						
					</div>
				</div>					
			</div>
		);
	}
}

export default PinShow;