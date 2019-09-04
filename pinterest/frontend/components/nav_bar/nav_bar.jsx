import React from "react";
import { Link } from "react-router-dom";

// if logged_in, shows the navBar
// how to style each of them
const NavBar = (currentUser, logout) => {
	return (
		<nav className="nav-bar">
			<div className="nav-left">
				<p>Pinterest Logo</p>
			</div>

			<div className="nav-middle">
				<p>Search bar</p>
			</div>

			<div className="nav-right">
				<Link to="/">Home</Link>
				<Link to="/">Following</Link>
				<Link to="/">{currentUser.username}_Dashboard</Link>
				<Link to="/">Notifications</Link>
				
				<button onClick={() => logout}>Log Out</button>
			</div>
		</nav>
	);
}

export default NavBar;

// <a href="/">logout link or button</a>