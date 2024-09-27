const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: "new agenda",
			contacts: [],
		},
		actions: {
			loadContacts: () => {
				const myHeaders = new Headers();
					myHeaders.append("accept", "application/json");

				const requestOptions = {
					method: "GET",
					headers: myHeaders,
				};

				const store = getStore();

				fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`, requestOptions)
					.then((response) => response.json())
					.then((data) => {
						setStore({ contacts: data.contacts });
					})
					.catch((error) => console.error(error));
			
			},
			deleteContact: (id) => {
				const myHeaders = new Headers();
				myHeaders.append("accept", "application/json");
			
				const requestOptions = {
					method: "DELETE",
					headers: myHeaders,
				};
			
				const store = getStore();
			
				fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts/${id}`, requestOptions)
					.then(() => {
						const updatedContacts = store.contacts.filter(contact => contact.id !== id);
						setStore({ contacts: updatedContacts });
					})
					.catch((error) => console.error(error));
			},
			addContact: (newContact) => {

				const store = getStore();

				const myHeaders = new Headers();
				myHeaders.append("accept", "application/json");
				myHeaders.append("Content-Type", "application/json");

				const requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: JSON.stringify(newContact),
				};

				fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`, requestOptions)
				.then((response) => response.json())
				.then((data) => {
					setStore({contacts: [...store.contacts, data]})
				})
				.catch((error) => console.error(error));
			},
			createAgenda: (newAgenda) => {
				const myHeaders = new Headers();
				myHeaders.append("accept", "application/json");

				const requestOptions = {
				method: "POST",
				headers: myHeaders,
				};

				fetch(`https://playground.4geeks.com/contact/agendas/${newAgenda}`, requestOptions)
				.then((response) => response.json())
				.then((data) => {
					setStore({ agenda: data.slug });
				})
				.catch((error) => console.error(error));
			},
			modifyContact: (modifiedContact, id) => {
				const myHeaders = new Headers();
				myHeaders.append("accept", "application/json");
				myHeaders.append("Content-Type", "application/json");
			
				const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: JSON.stringify(modifiedContact)
				};
			
				fetch(`https://playground.4geeks.com/contact/agendas/${getStore().agenda}/contacts/${id}`, requestOptions)
					.then(response => {
						if (!response.ok) {
							throw new Error(`No se pudo actualizar el contacto: ${response.statusText}`);
						}
						return response.json();
					})
					.then(data => {
						getActions().loadContacts();
					})
					.catch(error => {
						console.error(`Error: ${error.message}`);
					});
			}
		}
	};
};

export default getState;