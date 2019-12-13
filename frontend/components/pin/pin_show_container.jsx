import { connect } from 'react-redux';
import PinShow from './pin_show';
import { fetchPin, removePin } from '../../actions/pin_actions';
import { removeItem } from '../../actions/item_actions';
// import { fetchUser } from "../../actions/user_actions";

const mapState = (state, ownProps) => {
	const pinId = ownProps.match.params.id;
	return { pin: state.entities.pins[pinId] }
}

const mapDispatch = (dispatch, ownProps) => {
	const pinId = ownProps.match.params.id;
	return { 
		fetchPin: () => dispatch(fetchPin(pinId)),
		fetchItem: () => dispatch(fetchItem(pinId)),
		removeItem: () => dispatch(removeItem(pinId)),
		removePin: () => dispatch(removePin(pinId))
	}
}

export default connect(mapState, mapDispatch)(PinShow);