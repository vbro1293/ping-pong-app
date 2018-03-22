import React from 'react';

//Form input for players name, with name being passed in as a prop, onChange event handler being passed down for input change

const Input = ({ value, onChange }) => (
	<div>
		<input className="input" placeholder="Name" onChange={ onChange } value = { value } />
	</div>
);

export default Input;