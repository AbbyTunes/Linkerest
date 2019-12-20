import { connect } from "react-redux";

// import { fetchBoards, removeBoard } from "../../actions/board_actions";
import BoardHeader from "./board_header";

const mapState = (state) => {

	const session = state.session;
	const users = state.entities.users;
	const currentUser = users[session.id];

	return { currentUser }
};

const mapDispatch = (dispatch) => ({
	// fetchBoards: () => dispatch(fetchBoards()),
	// removeBoard: (id) => dispatch(removeBoard(id)),
	// removeItem: (id) => dispatch(removeItem(id))
});

export default connect(mapState, mapDispatch)(BoardHeader);