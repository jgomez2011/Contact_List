import React, { useContext } from "react";
import "../../styles/home.css";
import Formulario from "../component/form.jsx";

import { Context } from "../store/appContext.js"

export const Home = () => {
	const { store } = useContext(Context)

	return (
		<>
			<div className="text-center mt-5 container">
				<Formulario />
			</div>
			
		</>
	);
};
