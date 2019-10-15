import { connect } from "react-redux";

import { fetchBoards, removeBoard } from "../../actions/board_actions";
import BoardIndex from "./board_index";

const mapState = (state) => {

	const session = state.session;
	const users = state.entities.users;
	const currentUser = users[session.id];

	const boards = state.entities.boards;

	const items = state.entities.items;

	return { currentUser: currentUser, boards: Object.values(boards) } 
};

const mapDispatch = (dispatch) => ({
	fetchBoards: () => dispatch(fetchBoards()),
	removeBoard: (id) => dispatch(removeBoard(id))
});

export default connect(mapState, mapDispatch)(BoardIndex);