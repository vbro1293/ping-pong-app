import React from 'react';

//Form input for players name, with name being passed in as a prop

const Input = ({ name }) => (
	<div className="form-group">
		<input className="form-control" placeholder="Name" value = { name } />
	</div>
);

export default Input;