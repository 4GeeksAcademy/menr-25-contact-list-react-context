import React, { useState, useContext } from "react";
import contactImage from '../../img/contact_img.jpg';
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaPen, FaTrashCan, FaPhone  } from "react-icons/fa6";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ContactCard = ( { name, phone, email, address, id} ) => {
	const { actions } = useContext(Context);
	const [showModalDelete, setShowModalDelete] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [newContact, setNewContact] = useState({
        name: name,   
        email: email, 
        phone: phone, 
        address: address 
    });

	const handleDeleteClick = () => {
        setShowModalDelete(true);
    };

    const handleCloseModalDelete = () => {
        setShowModalDelete(false);
    };

    const handleEditClick = () => {
        setNewContact({ name, email, phone, address });
        setShowModalEdit(true);
    };

    const handleCloseModalEdit = () => {
        setShowModalEdit(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
    };

    const handleSaveChanges = () => {
        actions.modifyContact(newContact, id);
        handleCloseModalEdit();
    };


	return (
		<div className="container">
			<ul className="list-group">
				<li className="list-group-item d-flex cardBackground">

					<div className="p-2 imageBox">
						<img className="contactImage" src={contactImage} alt="Mike Anamendola"/>
					</div>

					<div className="p-2 align-self-center contactBox" style={{ display: 'flex', flexDirection: 'column' }}>

                        <span className="name blueColor"> <span className="orangeColor">&#123;</span> {name} <span className="orangeColor">&#125;</span> </span>

						<span>
							<FaPhone className="phoneIcon redColor"/>
							<span className="blueColor">{phone}</span>
						</span>

						<span>
							<IoMdMail className="emailIcon redColor"/>
							<span className="blueColor">{email}</span>
						</span>

						<span>
							<FaLocationDot className="addressIcon redColor"/>
							<span className="blueColor">{address}</span>
						</span>

					</div>

					<div className="buttonBox d-flex justify-content-between align-self-center ms-auto p-2">

                        <FaPen className="pencil me-5 orangeColor" onClick={handleEditClick} />
                        <FaTrashCan className="trash me-5 orangeColor" onClick={handleDeleteClick} />

                    </div>	
				</li>
			</ul>

			{showModalDelete && (
                <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog text-danger">
                        <div className="modal-content cardBackground">
                            <div className="modal-header">
                                <h5 className="modal-title blueColor"><span className="whiteColor">&lt;</span>Confirm Deletion<span className="whiteColor">/&gt;</span></h5>
                                <button type="button" className="btn-close" onClick={handleCloseModalDelete} aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <p className="blueColor"><span className="whiteColor">&lt;</span>are you sure you want to remove<span className="orangeColor">&#123; {name} &#125;</span>from your address book contact list?<span className="whiteColor">/&gt;</span></p>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModalDelete}>Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={() => { actions.deleteContact(id); handleCloseModalDelete(); }}>Remove contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

			{showModalEdit && (
                <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content cardBackground">
                            <div className="modal-header">
                                <h5 className="modal-title blueColor"><span className="whiteColor">&lt;</span>Edit Contact<span className="whiteColor">/&gt;</span></h5>
                                <button type="button" className="btn-close" onClick={handleCloseModalEdit} aria-label="Close"></button>
                            </div>

                            <div className="w-75 mx-auto p-2">
                                <form className="mb-5">
                                    <div className="mb-3">
                                        <label htmlFor="fullName" className="form-label"><span className="redColor">const <span className="violetColor fw-bold">fullName</span> = <span className="greenColor">(*)</span> =&gt; <span className="blueColor">&#123;</span></span></label>
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
                                        <label htmlFor="phone" className="form-label"><span className="redColor">const <span className="violetColor fw-bold">fullName</span> = <span className="greenColor">(*)</span> =&gt; <span className="blueColor">&#123;</span></span></label>
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
                                        <label htmlFor="address" className="form-label"><span className="redColor">const <span className="violetColor fw-bold">fullName</span> = <span className="greenColor">(*)</span> =&gt; <span className="blueColor">&#123;</span></span></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter address"
                                            name="address"
                                            value={newContact.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </form>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModalEdit}>Cancel</button>
                                <button type="submit" className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
		</div>
	);
};
