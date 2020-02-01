import React, { Component } from 'react';
import './reset.css';
import './home.css';

class Home extends Component {
	state = {};
	render() {
		return (
			<div className="main_container">
				<div className="overlay">
					<h1 id="welcome_title">Welcome to TDo</h1>
				</div>
			</div>
		);
	}
}

export default Home;
