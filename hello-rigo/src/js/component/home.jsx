import React from "react";

import { Navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Footer className />
			</div>
		);
	}
}
