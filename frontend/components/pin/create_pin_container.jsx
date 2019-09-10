import { connect } from 'react-redux';
import CreatePinForm from './create_pin_form';
import { createPin } from '../../actions/pin_actions';

const mapState = (state) => {
	const session = state.session;
	const users = state.entities.users;
	const pin = { title: "", description: "", link: "" }
	// const pins = state.entities.pins;
	return { currentUser: users[session.id], pin: pin }
};

const mapDispatch = (dispatch) => ({
	createPin: (pin) => dispatch(createPin(pin))
});
export default connect(mapState, mapDispatch)(CreatePinForm);