import React from 'react';
import Player from './Player';

//Map over the players creating a input and score component for each
//Passing in the Players as a prop and deconstructing to get each players name and score

const PingPong = ({ players }) => (
	<div className="row">
		{ players.map((player, i) => (
			<Player key={ i } player={ player } />
		))}
	</div>
)

export default PingPong;