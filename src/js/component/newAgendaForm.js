import React, { useState, useContext } from "react";
import "../../styles/home.css";
import { useNavigate } from "react-router";

import { Context } from "../store/appContext";

export const NewAgendaForm = () => {
	const { actions } = useContext(Context); 
	const navigate = useNavigate()
    const [agendaName, setAgendaName] = useState("");

	const handleSubmit = (e) => {
        e.preventDefault();
        actions.createAgenda(agendaName);
		setAgendaName("");
		navigate("/home");
    };

	return (
		<>

			<div className="w-75 mx-auto p-2">
				<form className="mb-5" onSubmit={handleSubmit}>

					<div className="mb-3">
						<label htmlFor="login" className="form-label"><span className="redColor">const <span className="violetColor fw-bold">agenda name</span> = <span className="greenColor">()</span> =&gt; <span className="blueColor">&#123;</span></span></label>
						<input 
							type="text"
							className="form-control"
							placeholder="insert the agenda's name"
							value={agendaName}
							onChange={(e) => setAgendaName(e.target.value)}
						/>
					</div>

					<div className="d-grid gap-2">
						<button type="submit" className="btn btn-primary">Save</button>
					</div>

				</form>
			</div>
		</>
	)
};
