import { connect } from 'react-redux';
import CreatePinForm from './create_pin_form';
import { createPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';

const mapState = (state) => {
	const session = state.session;
	const users = state.entities.users;
	const pin = { link: "" };
	const boards = state.entities.boards;
	return { currentUser: users[session.id], pin, boards }
};

const mapDispatch = (dispatch) => ({
	createPin: (pin) => dispatch(createPin(pin)),
	fetchBoards: () => dispatch(fetchBoards())

});
export default connect(mapState, mapDispatch)(CreatePinForm);