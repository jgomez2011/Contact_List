import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContactList from "../component/contactList.jsx";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
				Contacts
				{store.contacts &&
					store.contacts.map((contact, index) => {
						console.log(contact)
						return <ContactList key={index} contact={contact} />;
					})}
			</div>
	);
};