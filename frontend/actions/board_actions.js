import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_ALL_BOARDS = "RECEIVE_ALL_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";

export const fetchBoards = () => dispatch => (
	BoardApiUtil.fetchBoards().then((boards) => dispatch({ type: RECEIVE_ALL_BOARDS, boards }))
);

export const fetchBoard = (id) => dispatch => (
	BoardApiUtil.fetchBoard(id).then((board) => dispatch({ type: RECEIVE_BOARD, board }))
);

export const createBoard = (board) => dispatch => (
	BoardApiUtil.createBoard(board).then((board) => dispatch({ type: RECEIVE_BOARD, board }))
);

export const removeBoard = (id) => dispatch => (
	BoardApiUtil.removeBoard(id).then((board) => dispatch({ type: REMOVE_BOARD, boardId: board.id }))
);
