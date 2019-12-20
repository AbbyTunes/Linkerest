import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUsers = () => dispatch => (
	UserApiUtil.fetchUsers().then((users) => dispatch({ type: RECEIVE_ALL_PINS, users }))
);

export const fetchUser = (id) => dispatch (
	UserApiUtil.fetchUser(id).then((user) => dispatch({ type: RECEIVE_USER, user }))
);