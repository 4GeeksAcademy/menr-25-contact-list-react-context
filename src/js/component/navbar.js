import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.css";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light mb-3 d-flex justify-content-center">
			<div>	

				<Link to="/home">	
					<button className="btn btn-success ms-5 me-5">Home</button>
				</Link>	

				<Link to="/create-agenda">	
					<button className="btn btn-success ms-5 me-5">New agenda</button>
				</Link>

				<Link to="/add-new-contact">	
					<button className="btn btn-success ms-5 me-5">Contact list</button>
				</Link>

				<Link to="/contact-form">
					<button className="btn btn-success ms-5 me-5">Add new contact</button>
				</Link>

			</div>
		</nav>
	);
};
