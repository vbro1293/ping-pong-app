import React from "react";

//Score display and button for adding point to score
//Score being passed in as a prop
//onClick event handler being passed down for button clicking

const Score = ({ score, onClick, serving }) => (
	<div>
		<p className="score">{serving ? "🏓" : null} { score } {serving ? "🏓" : null}</p>
		<button className="btn" onClick={ onClick }>Add</button>
	</div>
);

export default Score;