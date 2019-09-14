import React from "react";
import { Link } from "react-router-dom";
import PinIndexItem from "./pin_index_item";

class PinIndex extends React.Component {

	componentDidMount() {
		this.props.fetchPins();
	}

	render() {
		// const { users } = this.props;
		// users={this.props.users}

		// const pins = this.props.pins.map((pin) => {
		// 	return <PinIndexItem key={pin.id} pin={pin} />				
		// });
		
		// debugger
		const columns = [[], [], [], [], []];
		const pins = this.props.pins.map((pin, idx) => {
			let bucket_idx = idx % 5;
			columns[bucket_idx].push(pin);
		});

		const columnPins = columns.map((col, idx) => {
			return (
				<div className="col" key={`col-${idx}`} >
					{col.map((pin) => {
						return <PinIndexItem key={pin.id} pin={pin} />
					})}
				</div>
			)
		});

		return (
			<div className="pin-frame">

				<div className="grid">
					{columnPins}
				</div>

			</div>
		);
	}
}

export default PinIndex;