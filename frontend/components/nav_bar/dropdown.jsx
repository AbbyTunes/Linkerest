import React from "react";
import { Link } from "react-router-dom";
// import { logout, currentUser } from "../../actions/session_actions";

class Dropdown extends React.Component {

	constructor(props) {
		super(props)
		this.state = { showMenu: false }
		this.showMenu = this.showMenu.bind(this);
		this.hideMenu = this.hideMenu.bind(this);
	}

	showMenu() {
		this.setState({ showMenu: true })
	}

	hideMenu() {
		this.setState({ showMenu: false })
	}

	render() {
		return (
			<div className="dropdown">
				<button className="hamburger" onClick={ this.showMenu }></button>
				
				{ this.state.showMenu ? (
						<div>
							<div className="modal" onClick={ this.hideMenu }></div>
							<ul>
								<Link to="/my-boards"><li>{ this.props.currentUser.username }</li></Link>
								<Link to="/my-boards"><li>My Dashboard</li></Link>
								<li onClick={ this.props.logout } >Log out</li>
							</ul>
						</div>
					) : ( null )
				} 
			</div>
		)
	}
}

export default Dropdown;
