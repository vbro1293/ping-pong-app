import React from 'react';
import Players from './Players';
import Winner from '../containers/Winner';

//Map over the players creating a input and score component for each
//Passing in the Players as a prop and deconstructing to get each players name and score
//id for identifying each player (key is for React only)

const PingPong = ({ players, winner }) => (
	<div>
		{ winner ? <Winner winner={ winner }/> : <Players players={ players }/> }
	</div>
)

export default PingPong;