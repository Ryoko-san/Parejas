import React from "react";

export class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<img
					src="http://placehold.it/500x325"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque.
					</p>
					<a href="" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
		);
	}
}
