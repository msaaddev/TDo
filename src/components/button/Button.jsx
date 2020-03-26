import React from 'react';
import './Button.css'

const Button = ({text}) => {
	return (
		<input id="Button" type="button" name={text} value={text} />
	);
};

export default Button;
