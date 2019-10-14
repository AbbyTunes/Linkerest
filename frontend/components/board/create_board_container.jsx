import { connect } from 'react-redux';
import CreateBoardForm from './create_board_form';
import { createBoard } from '../../actions/board_actions';

const mapState = (state) => {
	const session = state.session;
	const users = state.entities.users;
	const board = { title: "", description: "", isPrivate: false }
	return { currentUser: users[session.id], board: board }
};

const mapDispatch = (dispatch) => ({
	createBoard: (board) => dispatch(createBoard(board))
});
export default connect(mapState, mapDispatch)(CreateBoardForm);