import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Jumbotron } from "./jumbotron.jsx";

import { Card } from "./Card.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="col-md-10">
					<div class="col-md-12 offset-md-1">
						<Jumbotron />
					</div>
				</div>
				<div class="col-md-12 offset-md-2">
					<div className="row">
						<div className="col-md-2 mb-3">
							<Card />
						</div>
						<div className="col-md-2 mb-3">
							<Card />
						</div>
						<div className="col-md-2 mb-3">
							<Card />
						</div>
						<div className="col-md-2 mb-3">
							<Card />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
