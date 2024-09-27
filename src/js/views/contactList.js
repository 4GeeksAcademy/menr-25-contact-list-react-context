import React, { useContext, useEffect } from "react";
import { ContactCard } from "../component/contactCard";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ContactList = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
        actions.loadContacts();
    }, [store.agenda]);
    if (!store.contacts || !Array.isArray(store.contacts) || store.contacts.length === 0) {

        return <h1 className="d-flex justify-content-center blueColor"><span className="whiteColor">&lt;</span>No contacts at the moment<span className="whiteColor">/&gt;</span></h1>;
    }

	return (
		<div className="container mb-5">
			<div className="row">
				<div className="col-md-8 mx-auto">
					{store.contacts.map((contact, id) => (
						<ContactCard
							key={id}
							name={contact.name}
							phone={contact.phone}
							email={contact.email}
							address={contact.address}
							id={contact.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
};