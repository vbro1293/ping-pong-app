import React from 'react';
import Input from "./Input";
import Score from "./Score";

//Map over the players creating a input and score component for each
//Passing in the Players as a prop and deconstructing to get each players name and score

const PingPong = ({ players }) => (
	<div className="row">
		{ players.map((player, i) => (
			<div key={ i } className="col-sm-6">
				<Input name ={ player.get("name") } />
				<Score score={ player.get("score") } />
			</div>
		))}
	</div>
)

export default PingPong;