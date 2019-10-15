import { connect } from 'react-redux';
import CreatePinForm from './create_pin_form';
import { createPin } from '../../actions/pin_actions';
import { fetchBoards } from "../../actions/board_actions";
import { createItem } from '../../actions/item_actions';

const mapState = (state) => {
	const session = state.session;
	const users = state.entities.users;
	const pin = { link: "" };
	const boards = state.entities.boards;
	return { currentUser: users[session.id], pin: pin, boards: Object.values(boards) }
};

const mapDispatch = (dispatch) => ({
	createPin: (pin) => dispatch(createPin(pin)),
	fetchBoards: () => dispatch(fetchBoards()),
	createItem: (item) => dispatch(createItem(item))

});
export default connect(mapState, mapDispatch)(CreatePinForm);