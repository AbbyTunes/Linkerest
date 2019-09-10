import React from "react";
import { Link } from "react-router-dom";
// import CreatePinContainer from "./create_pin_container";
import PinIndexItem from "./pin_index_item";

class PinIndex extends React.Component {

	componentDidMount() {
		this.props.fetchPins();
	}

	render() {
		// const { users } = this.props;
		const pins = this.props.pins.map((pin) => {
			return <PinIndexItem key={pin.id} pin={pin} users={this.props.users} />
		});
		// debugger
		return (
			<div className="pin-frame">

				<div className="createPin">
					<Link to="/create-pin"></Link>
				</div>

				<p>Show all the pins</p>

				<div className="grid">
					<ul>
						{pins}
					</ul>
				</div>

				

			</div>
		);
	}
}

export default PinIndex;