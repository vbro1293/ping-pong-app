import React from 'react';

const Input = ({ name }) => (
	<div className="form-group">
		<input className="form-control" placeholder="Name" value = { name } />
	</div>
);

export default Input;