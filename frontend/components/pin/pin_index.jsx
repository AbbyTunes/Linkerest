import React from "react";
import PinIndexItem from "./pin_index_item";
import { Link } from 'react-router-dom';

class PinIndex extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.fetchPins();
		this.props.fetchBoards();
	}

	render() {

		const { pins, boards, removePin } = this.props;

		if (!pins.length || !boards.length) {
			return (
				<div className="empty-board">
					<div className="empty-text"> You don't have pins yet</div>
					<Link to="/create-pin"><div className="upload-pin">Upload Pins</div></Link>
				</div>
			)			
		}

		const columns = [[], [], [], []];
		const pinsArray = pins.map((pin, idx) => {
			let bucket_idx = idx % 4;
			columns[bucket_idx].push(pin);
		});

		const columnPins = columns.map((col, idx) => {
			return (
				<div className="col" key={`col-${idx}`} >
					{col.map((pin) => {
						return (
							<div key={`pin-${pin.id}`}>
								 <PinIndexItem
									pin={pin} 
									boards={boards}
									removePin={removePin} />
							</div>
						)
						
					})}
				</div>
			)
		});

		return (
			<div className="pin-frame-canvas">
				<div className="grid">
					{columnPins}
				</div>
			</div>
			
		);
	}
}

export default PinIndex;