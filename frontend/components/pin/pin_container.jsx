import React from "react";
import { connect } from "react-redux";
import { fetchPins, fetchPin, createPin, removePin } from "../../actions/pin_actions";
import Pin from "./pin";

// ideally: show pins related to you when you logged in 
// generally: show all the pins

const mapState = (state) => {
	const session = state.session;
	const users = state.entities.users;
	const pins = state.entities.pins;
	return { currentUser: users[session.id], pins }
};

const mapDispatch = (dispatch) => ({
	// get pins, upload pin etc
	fetchPins: () => dispatch(fetchPins()),
	fetchPin: (id) => dispatch(fetchPin(id)),
	createPin: (pin) => dispatch(createPin(pin)),
	removePin: (id) => dispatch(removePin(id))
});

export default connect(mapState, mapDispatch)(Pin);