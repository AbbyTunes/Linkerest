import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

// put in entry file
// const preloadedState = { user: window.currentUser };

const configureStore = (preloadedState = {}) => (
	createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;