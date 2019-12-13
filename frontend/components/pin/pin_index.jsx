import React from "react";
import { Link } from "react-router-dom";
import PinIndexItem from "./pin_index_item";

class PinIndex extends React.Component {

	componentDidMount() {
		this.props.fetchPins();
		this.props.fetchBoards();
	}

	render() {

		const { pins, boards } = this.props;
		// if (!pins.length || !boards.length) return null;

		const columns = [[], [], [], []];
		const pinsArray = this.props.pins.map((pin, idx) => {
			let bucket_idx = idx % 4;
			columns[bucket_idx].push(pin);
		});

		const columnPins = columns.map((col, idx) => {
			return (
				<div className="col" key={`col-${idx}`} >
					{col.map((pin) => {
						return <PinIndexItem key={`pin-${pin.id}`} 
								pin={pin} boards={boards} />
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