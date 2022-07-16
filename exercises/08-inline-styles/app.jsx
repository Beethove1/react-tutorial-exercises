import React from "react";
import ReactDOM from "react-dom";

const output = (
	<div style={{ /* Add your code here */ }} id="card">
		<img
			style={{ width: "100%", objectFit: "cover" }}
			id="card-image"
			src="../../.learn/assets/06-accessing-object-values.webp"
			alt="Wrong Image!"
		/>
		<div className="col-12 p-3">
			<h5>Nike Mercurial Superfly 8Max</h5>
			<span className="text-secondary">Firm-Ground Soccer Cleats</span>
			<p>$ 295.00</p>
			<p>Reviews: 5</p>
			<a
				href="https://www.nike.com/t/mercurial-superfly-8-elite-fg-firm-ground-soccer-cleats-htj6pt/CV0958-403"
				className="w-100 btn btn-dark"
				target="_blank">
				Shop Now
			</a>
		</div>
	</div>
);

const myDiv = document.querySelector("#myDiv");

ReactDOM.render(output, myDiv);
