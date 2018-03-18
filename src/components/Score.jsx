import React from "react";

const Score = ({ score }) => (
	<div>
		<p className="well">{ score }</p>
		<button className="btn btn-primary">Add</button>
	</div>
);

export default Score;