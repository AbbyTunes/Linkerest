import { RECEIVE_ALL_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from "../actions/board_actions";
import { REMOVE_ITEM } from "../actions/item_actions";
import { merge } from "lodash";

const boardsReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_ALL_BOARDS:
			return action.boards;
		case RECEIVE_BOARD:
			return Object.assign({}, state, { [action.board.id]: action.board });
		case REMOVE_ITEM:
			let board = merge({}, state[action.boardId]);
			board.itemIds = board.itemIds.filter((id) => {
				return id != action.itemId
			});
			return Object.assign({}, state, { [board.id]: board });
		case REMOVE_BOARD:
			let newState = Object.assign({}, state);
			delete newState[action.boardId];
			return newState;
		default:
			return state;
	}
}

export default boardsReducer;