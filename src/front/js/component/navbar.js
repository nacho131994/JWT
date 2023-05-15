import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/Signup">
					<button type="button" class="btn btn-primary">Sign Up</button>
				</Link>		
				<Link to="/Login">
					<button type="button" class="btn btn-primary">Login</button>
				</Link>	
				<Link to="/Private">
					<button type="button" class="btn btn-primary">Private</button>
				</Link>						
			
			</div>
		</nav>
	);
};
