import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions';

const mapState = (state, ownProps) => {
	const boardId = ownProps.match.params.boardId;
	return { board: state.entities.boards[boardId] }
}

const mapDispatch = (dispatch, ownProps) => {
	const boardId = ownProps.match.params.boardId;
	return { fetchBoard: () => dispatch(fetchBoard(boardId)) }
}

export default connect(mapState, mapDispatch)(BoardShow);