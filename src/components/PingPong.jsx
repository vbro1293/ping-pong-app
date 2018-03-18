import React from 'react';
import Input from "./Input";
import Score from "./Score";

const PingPong = ({ Players }) => (
	<div className="row">
		{ players.map((player, i) => (
			<div key={ i } className="col-sm-6">
				<Input name ={ player.get("name") } />
				<Score score={ player.get("score") } />
			</div>
		))}
	</div>
)