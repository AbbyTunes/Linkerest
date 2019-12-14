import { connect } from 'react-redux';
import PinShow from './pin_show';
import { fetchPin, removePin } from '../../actions/pin_actions';
import { fetchItem, removeItem } from '../../actions/item_actions';
import { fetchUser } from "../../actions/user_actions";

const mapState = (state, ownProps) => {

	const session = state.session;
	const users = state.entities.users;
	const currentUser = users[session.id]

	const pinId = ownProps.match.params.id;

	return { 
		currentUser,
		pin: state.entities.pins[pinId],
		item: state.entities.items[pinId],
		id: pinId
	}
}

const mapDispatch = (dispatch, ownProps) => {
	const pinId = ownProps.match.params.id;
	return { 
		fetchPin: () => dispatch(fetchPin(pinId)),
		fetchItem: () => dispatch(fetchItem(pinId)),
		removeItem: (itemId) => dispatch(removeItem(itemId)),
		removePin: (pinId) => dispatch(removePin(pinId))
	}
}

export default connect(mapState, mapDispatch)(PinShow);