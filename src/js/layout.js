import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { CreateAgenda} from "./views/createAgenda";
import { Home } from "./views/home";
import { ContactList } from "./views/contactList";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { ContactForm } from "./views/contactForm";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/contact-form" element={<ContactForm />} />
						<Route path="/add-new-contact" element={<ContactList />} />
						<Route path="/create-agenda" element={<CreateAgenda />} />
						<Route path="/home" element={<Home />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
