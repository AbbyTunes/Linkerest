import React from "react";
import { connect } from "react-redux";
import { fetchPins } from "../../actions/pin_actions";
import { fetchBoards } from '../../actions/board_actions';
import { removePin } from '../../actions/pin_actions';
import PinIndex from "./pin_index";


const mapState = (state) => {
	const session = state.session;
	const users = state.entities.users;
	const currentUser = users[session.id]

	const pins = Object.values(state.entities.pins);
	const boards = Object.values(state.entities.boards);

	return { currentUser, pins, boards }
};

const mapDispatch = (dispatch) => ({
	fetchPins: () => dispatch(fetchPins()),
	fetchBoards: () => dispatch(fetchBoards()),
	removePin: (id) => dispatch(removePin(id))
});

export default connect(mapState, mapDispatch)(PinIndex);