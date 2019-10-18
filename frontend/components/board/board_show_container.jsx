import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, fetchBoards } from '../../actions/board_actions';
import { removeItem } from '../../actions/item_actions';

const mapState = (state, ownProps) => {

	// const session = state.session;
	// const users = state.entities.users;
	// const currentUser = users[session.id];

	// frontend route
	// according to how you set up // :boardId 
	const boardId = ownProps.match.params.id;
	const board = state.entities.boards[boardId];

	const boards = Object.values(state.entities.boards);

	let items = [];
	if (board && board.itemIds) {
		board.itemIds.forEach((itemId) => {
			if (state.entities.items[itemId]) {
				items.push(state.entities.items[itemId])
			}
		});
	}
	return { board, boards, items }
}

const mapDispatch = (dispatch, ownProps) => {
	const boardId = ownProps.match.params.id; //.boardId;
	return {
		fetchBoard: () => dispatch(fetchBoard(boardId)),
		fetchBoards: () => dispatch(fetchBoards()),
		removeItem: (itemId) => dispatch(removeItem(itemId))
	}
}

export default connect(mapState, mapDispatch)(BoardShow);