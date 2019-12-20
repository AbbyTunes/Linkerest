import * as ItemApiUtil from '../util/item_api_util';

export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

const receiveAllItems = (items) => ({
	type: RECEIVE_ALL_ITEMS,
	items
});

const receiveItem = (item) => ({
	type: RECEIVE_ITEM,
	item
});

export const fetchItems = () => dispatch => (
	ItemApiUtil.fetchItems().then((items) => dispatch(receiveAllItems(items)))
);

export const fetchItem = (id) => dispatch => (
	ItemApiUtil.fetchItem(id).then((item) => dispatch(receiveItem(item)))
);

export const createItem = (item) => dispatch => (
	ItemApiUtil.createItem(item).then((item) => dispatch(receiveItem(item)))
);

export const removeItem = (id) => dispatch => (
	ItemApiUtil.removeItem(id).then((res) => dispatch({ type: REMOVE_ITEM, itemId: res.itemId, boardId: res.boardId }))
);
