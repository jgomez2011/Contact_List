import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Agregar Contacto</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Lista de Contactos</button>
				</Link>
			</div>
		</nav>
	);
};
