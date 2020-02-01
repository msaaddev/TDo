import React from 'react';
import './LoginButton.css'

const LoginButton = ({text}) => {
	return (
		<input id="loginButton" type="button" name="Login" value={text} />
	);
};

export default LoginButton;
