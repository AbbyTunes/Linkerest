import { connect } from "react-redux";

import { fetchBoards, removeBoard } from "../../actions/board_actions";
import BoardIndex from "./board_index";

// user.boards => user.myBoards
// finding my boards to show

const mapState = (state) => {

	const session = state.session;
	const users = state.entities.users;
	const boards = state.entities.boards;
	// only choose the boards that belong to the currentUser
	const currentUser = users[session.id];
	// const boards = currentUser.boards;
	// debugger
	return { currentUser: currentUser, boards: Object.values(boards) }
};

const mapDispatch = (dispatch) => ({
	fetchBoards: () => dispatch(fetchBoards()),
	removeBoard: (id) => dispatch(removeBoard(id))
});

export default connect(mapState, mapDispatch)(BoardIndex);