import { connect } from "react-redux";

import { fetchBoards, removeBoard } from "../../actions/board_actions";
import { removeItem } from '../../actions/item_actions';
import BoardIndex from "./board_index";

const mapState = (state) => {
	const boards = state.entities.boards;
	return { boards: Object.values(boards) } 
};

const mapDispatch = (dispatch) => ({
	fetchBoards: () => dispatch(fetchBoards()),
	removeBoard: (id) => dispatch(removeBoard(id)),
	removeItem: (itemId) => dispatch(removeItem(itemId))
});

export default connect(mapState, mapDispatch)(BoardIndex);