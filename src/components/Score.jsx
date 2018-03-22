import React from "react";

//Score display and button for adding point to score
//Score being passed in as a prop
//onClick event handler being passed down for button clicking

const Score = ({ score, onClick }) => (
	<div>
		<p className="score">{ score }</p>
		<button className="btn" onClick={ onClick }>Add</button>
	</div>
);

export default Score;