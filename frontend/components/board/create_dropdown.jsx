import React from "react";
import { Link } from "react-router-dom";

class CreateDropdown extends React.Component {

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
			<div className="create-dropdown">

				<div className="create" onClick={this.showMenu}></div>

				{this.state.showMenu ? (
					<div>
						<div className="modal" onClick={this.hideMenu}></div>
						<ul>
							<Link to="/create-pin"><li>Create Pin</li></Link>
							<li>Create Board</li>
							{/* <Link to="/create-board"><li>Create Board</li></Link> */}
						</ul>
					</div>
					) : (null)
				}
			</div>
		)
	}
}

export default CreateDropdown;
