import React from 'react';

//Get winning player
const Winner = ({ winner, onClick }) => (
	<div className="end">
		<h1>{ winner.get('name') } won!</h1>
		<button onClick={ onClick } className="btn">RESET</button>
	</div>
);

export default Winner;