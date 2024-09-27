import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import { Context } from "../store/appContext";

import "../../styles/contactForm.css";

export const ContactForm = () => {
	const { actions } = useContext(Context);
    const navigate = useNavigate()

    const [newContact, setNewContact] = useState({ name: '', email: '', phone: '', address:'' });
    const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newContact.name.trim() !== "" && newContact.phone.trim() !== "") {
        actions.addContact(newContact);
        setNewContact({ name: "", email: "", phone: "", address: "" });
        setShowAlert(false); 
        navigate("/add-new-contact");
    } else {
        setShowAlert(true); 
    }
};

	return (
        <>
            <h1 className="d-flex justify-content-center blueColor"><span className="whiteColor">&lt;</span>add a<span className="orangeColor">&#123; new contact &#125;</span><span className="whiteColor">/&gt;</span></h1>

            <div className="w-75 mx-auto p-2">

                {showAlert && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Error!</strong> Please complete the required fields. (*).
                        <button type="button" className="btn-close" onClick={() => setShowAlert(false)}></button>
                    </div>
                )}

                    <form className="mb-5" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label"><span className="redColor">const <span className="violetColor fw-bold">full name</span> = <span className="greenColor">(*)</span> =&gt; <span className="blueColor">&#123;</span></span></label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Full Name"
                                name="name"
                                value={newContact.name}
                                onChange={handleChange}
                                />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label"><span className="redColor">const <span className="violetColor fw-bold">email</span> = <span className="greenColor">()</span> =&gt; <span className="blueColor">&#123;</span></span></label>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter email"
                                name="email"
                                value={newContact.email}
                                onChange={handleChange} 
                                />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label"><span className="redColor">const <span className="violetColor fw-bold">phone</span> = <span className="greenColor">(*)</span> =&gt; <span className="blueColor">&#123;</span></span></label>
                            <input 
                                type="tel" 
                                className="form-control" 
                                placeholder="Enter phone"
                                name="phone"
                                value={newContact.phone}
                                onChange={handleChange}
                                />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label"><span className="redColor">const <span className="violetColor fw-bold">address</span> = <span className="greenColor">()</span> =&gt; <span className="blueColor">&#123;</span></span></label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter address"
                                name="address"
                                value={newContact.address}
                                onChange={handleChange}
                                />
                        </div>
                        
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>

                    </form>

                <Link to="/add-new-contact">
                    or get back to contact list
                </Link>
            </div>
        </>
	);
};