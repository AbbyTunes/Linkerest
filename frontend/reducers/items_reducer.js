import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM, REMOVE_ITEM } from "../actions/item_actions";
import { RECEIVE_BOARD } from "../actions/board_actions";

const itemsReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_ALL_ITEMS:
			return action.items;
		case RECEIVE_ITEM:
			return Object.assign({}, state, { [action.item.id]: action.item });
		case RECEIVE_BOARD:
			return Object.assign({}, state, action.items);
		case REMOVE_ITEM:
			let newState = Object.assign({}, state);
			delete newState[action.itemId];
			return newState;
		default:
			return state;
	}
}

export default itemsReducer;