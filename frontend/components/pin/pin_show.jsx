import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {

	constructor(props) {
		super(props)
		// this.state = { boardId: this.props.item.boardId }
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.fetchPin();
		this.props.fetchItem();
	}

	handleSubmit(e) {
		e.preventDefault();
		const { id , currentUser } = this.props;
		this.props.removeItem(id);
		this.props.removePin(id);
		// straight to main page
		// this.props.history.push(`/my-boards/${this.state.boardId}`);
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
							<input type="submit" value="Delete Pin" onClick={this.handleSubmit} className="delete-pin" />
							{/* <div className="delete-pin">Delete Pin</div> */}
							<Link to={`${pin.link}`}><div className="link-to">{pin.link}</div></Link>
						</div>
						
					</div>
				</div>					
			</div>
		);
	}
}

export default PinShow;