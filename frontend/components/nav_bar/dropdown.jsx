import React from "react";
import { Link } from "react-router-dom";

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
        <button className="hamburger" onClick={this.showMenu}></button>

        {this.state.showMenu ? (
          <div>
            <div className="modal" onClick={this.hideMenu}></div>
            <ul>
              <Link to="/my-boards" onClick={this.hideMenu}>
                <li>My Boards</li>
              </Link>
              <Link to="/create-pin" onClick={this.hideMenu}>
                <li>Upload Pin</li>
              </Link>
              <a target="_blank" href="https://www.abbydeveloper.com/">
                <li>About Developer</li>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/abby-jun-xu/"
              >
                <li>LinkedIn</li>
              </a>
              <a target="_blank" href="https://github.com/AbbyTunes">
                <li>Github</li>
              </a>
              <li onClick={this.props.logout}>Log out</li>
            </ul>
          </div>
        ) : null}
      </div>
    );
	}
}

export default Dropdown;
