import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions';
import { fetchItems, fetchItem, removeItem } from '../../actions/item_actions';
import { fetchPins, fetchPin } from '../../actions/pin_actions'; 

const mapState = (state, ownProps) => {

	const session = state.session;
	const users = state.entities.users;
	const currentUser = users[session.id];

	const boardId = ownProps.match.params.id; // boardId;
	const board = state.entities.boards[boardId];

	const pins = state.entities.pins;
	debugger;

	return { currentUser, board, pins }
	
	// const boardPins = Object.values(board.pinIds).map((pinId) => {
	// 	return pin
	// })
	// return { board, pins: board.pinId, currentUser: currentUser }
}

const mapDispatch = (dispatch, ownProps) => {
	const boardId = ownProps.match.params.id; //.boardId;
	return { 
		fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
		fetchItems: () => dispatch(fetchItems()),
		removeItem: (id) => dispatch(removeItem(id)),
		fetchPins: () => dispatch(fetchPins()),
		fetchPin: (id) => dispatch(fetchPin(id))
	}
}

export default connect(mapState, mapDispatch)(BoardShow);