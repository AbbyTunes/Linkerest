import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
	
	// make a store variable
	let store;
	
	// if currentUser exists on window 
	// in views/root.html.erb
	if (window.currentUser) {
		
		// const currentUser = Object.values(window.currentUser)[0]; 
		
		const currentUser = window.currentUser;
		// const { currentUser } = window;
		
		const id = currentUser.id;
		// const { id } = currentUser;

		const preloadedState = {
			entities: {
				users: {
					[id]: currentUser
					// currentUser.id: currentUser
				}
			},
			session: { id: currentUser.id }
			// session: { id }
		};
		store = configureStore(preloadedState);

	} else {
		store = configureStore();
	}

	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store} />, root);
	
	window.getState = store.getState;
	window.dispatch = store.dispatch;
});

// for testing
// window.signup = signup;
// window.login = login;
// window.logout = logout;