import React, { useContext } from "react";
import { Context } from "../store/appContext";
import contactImage from '../../img/Contacts_logo.png';
import "../../styles/home.css";
import { NewAgendaForm } from "../component/newAgendaForm";

export const Home = () => {

	const { store } = useContext(Context);

	const contactsCount = store.contacts ? store.contacts.length : 0;
	const welcomeName = !store.agenda ? "this new" : store.agenda;

	return (
		<>
			<h1 className="d-flex justify-content-center mb-5"><span className="whiteColor">&lt;</span><span className="blueColor">welcome to<span className="orangeColor">( <span className="fw-bold"> {welcomeName} </span> )</span>agenda</span><span className="whiteColor">/&gt;</span></h1>

			<div className="home">
				<div className="text-center mt-5">
				<img src={contactImage} alt="Mike Anamendola"/>
				</div>
				<div className="card-body"><p className="display-6 whiteColor">Contacts in agenda: <span className="violetColor">{contactsCount}</span></p></div>
			</div>

			<h3 className="d-flex justify-content-center mt-5 blueColor"><span className="whiteColor">&lt;</span>please create your <span className="orangeColor">&#123; new agenda &#125;</span><span className="whiteColor">/&gt;</span></h3>
			<NewAgendaForm className="agendaForm"/>
		</>
	);
};
