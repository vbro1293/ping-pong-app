import React from 'react';
import Input from './Input';
import Score from './Score';

//Player component to handle name and score
const Player = ({ player }) => (
	<div className="col-sm-6">
		<Input name={ player.get('name') }/>
		<Score score={ player.get('score') }/>
	</div>
);

export default Player;