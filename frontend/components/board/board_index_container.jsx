import { connect } from "react-redux";

import { fetchBoards, removeBoard } from "../../actions/board_actions";
import { fetchPins, fetchPin } from '../../actions/pin_actions'; 
import BoardIndex from "./board_index";

const mapState = (state) => {

	const session = state.session;
	const users = state.entities.users;
	const currentUser = users[session.id];

	const boards = state.entities.boards;

	const pins = state.entities.pins;
	// debugger;
	return { currentUser: currentUser, boards: Object.values(boards) } 
	// pins: Object.values(pins)
};

const mapDispatch = (dispatch) => ({
	fetchBoards: () => dispatch(fetchBoards()),
	removeBoard: (id) => dispatch(removeBoard(id))
	// fetchPins: () => dispatch(fetchPins())
});

export default connect(mapState, mapDispatch)(BoardIndex);