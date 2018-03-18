import React from "react";

//Score display and button for adding point to score
//Score being passed in as a prop

const Score = ({ score }) => (
	<div>
		<p className="well">{ score }</p>
		<button className="btn btn-primary">Add</button>
	</div>
);

export default Score;