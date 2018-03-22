import React from 'react';
import Player from './Player';

//Map over the players creating a input and score component for each
//Passing in the Players as a prop and deconstructing to get each players name and score
//id for identifying each player (key is for React only)

const PingPong = ({ players, id }) => (
	<div className="players-container">
		{ players.map((player, i) => (
			<Player key={ i } id ={ i } player={ player } />
		))}
	</div>
)

export default PingPong;