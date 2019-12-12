import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";

const NavBar = ({ currentUser, logout }) => {

	if (!currentUser) {
		return (<div></div>)
	}
	return (
		<div>
			<nav className="nav-bar">

				<div className="nav-left">
					<Link to="/">
						<div className="logo-nav"></div>
					</Link>
				</div>

				{/* <div className="nav-middle">
					<div className="search-icon"></div>
					<input className="search" type="text" placeholder="Search"/>
				</div> */}

				<div className="nav-right">
					<div className="nav-link">
						<Link to="/">Home</Link>
						<Link to="/my-boards">My Boards</Link>
						<Link to="/create-pin">Upload Pins</Link>
						<a href="https://www.abbydeveloper.com/">Portfolio</a>
						<a href="https://www.linkedin.com/in/abby-jun-xu/">LinkedIn</a>
					</div>
					<Dropdown logout={logout} currentUser={currentUser} />
				</div>	
			</nav>
			<div></div>
		</div>
	);
}

export default NavBar;
