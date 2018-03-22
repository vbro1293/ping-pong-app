import React from 'react';
import Input from '../containers/Input';
import Score from '../containers/Score';

//Player component to handle name, score and if serving

const Player = ({ player, id }) => (
	<div className="player-section">
		<Input id ={ id } value={ player.get('name') }/>
		<Score id ={ id } score={ player.get('score')} serving={ player.get("serving")} />
	</div>
);

export default Player;