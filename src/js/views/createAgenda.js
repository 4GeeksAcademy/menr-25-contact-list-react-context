import React from "react";
import "../../styles/home.css";
import { NewAgendaForm } from "../component/newAgendaForm";

export const CreateAgenda = () => (

	<>
		<h1 className="d-flex justify-content-center blueColor"><span className="whiteColor">&lt;</span>create a<span className="orangeColor">&#123; new agenda &#125;</span><span className="whiteColor">/&gt;</span></h1>
		<NewAgendaForm/>
	</>

);