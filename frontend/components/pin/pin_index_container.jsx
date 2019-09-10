import React from "react";
import { connect } from "react-redux";
import { fetchPins, fetchPin, createPin, removePin } from "../../actions/pin_actions";
import { fetchUsers, fetchUser } from "../../actions/user_actions";
import PinIndex from "./pin_index";

// ideally: show pins related to you when you logged in 
// generally: show all the pins

const mapState = (state) => {
	const session = state.session;
	const users = state.entities.users;
	const pins = state.entities.pins;
	return { currentUser: users[session.id], 
			pins: Object.values(pins),
			users: users }
};

const mapDispatch = (dispatch) => ({
	fetchPins: () => dispatch(fetchPins()),
	fetchPin: (id) => dispatch(fetchPin(id)),
	createPin: (pin) => dispatch(createPin(pin)),
	removePin: (id) => dispatch(removePin(id)),
	fetchUsers: () => dispatch(fetchUsers()),
	fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapState, mapDispatch)(PinIndex);