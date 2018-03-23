import React from 'react';
import Player from './Player';

//Container component of two players
const Players = ({ players }) => (
	<div className="players-container">
		{ players.map((player, i) => (
			<Player key={ i } id ={ i } player={ player } />
		))}
	</div>
);

export default Players;