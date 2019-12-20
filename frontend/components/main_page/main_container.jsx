import { connect } from "react-redux";
import MainPage from "./main_page";

const mapState = (state) => {
	const session = state.session;
	const users = state.entities.users;
	return {
		currentUser: users[session.id]
	}
};

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(MainPage);