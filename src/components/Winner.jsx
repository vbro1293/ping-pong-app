import React from 'react';

//Get winning player
const Winner = ({ winner }) => (
	<p>{ winner.get('name') } won!</p>
);

export default Winner;