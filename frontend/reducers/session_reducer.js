import { 
	RECEIVE_CURRENT_USER,
	LOGOUT_CURRENT_USER 
} from '../actions/session_actions';

const _nullUser = Object.freeze({ id: null });

const sessionReducer = (state = _nullUser, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			return { id: action.currentUser.id };

			// const id = Object.keys(action.currentUser)[0];
			// first key of the key array

			// return { id: id }
			// first id is a string, second id gets evaluated
			// { [id]: id } => both gets evaluated

		case LOGOUT_CURRENT_USER:
			return _nullUser;
		default:
			return state;
	}
}

export default sessionReducer;


