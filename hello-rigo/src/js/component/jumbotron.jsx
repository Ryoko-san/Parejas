import React from "react";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid my-4">
				<div className="container">
					<h1 className="display-4">A warm welcome!</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Ipsa, ipsam, eligendi, in quo sunt possimus non
						incidunt odit vero aliquid similique quaerat nam nobis
						illo aspernatur vitae fugiat numquam repellat.
					</p>
					<a href="#" className="btn btn-primary">
						Call to action!
					</a>
				</div>
			</div>
		);
	}
}
