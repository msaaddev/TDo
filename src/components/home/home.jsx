import React, { Component } from 'react';
import LoginButton from '../button/LoginButton';
import './reset.css';
import './home.css';

class Home extends Component {
	state = {
		title: 'TDo - Everything you need',
		description: 'A fast & easy way to keep track of your daily tasks',
		button_text: "login"
	};
	render() {
		return (
			<div className="main_container">
				<div className="overlay">
					<h1 id="welcome_title">
						{this.state.title}
						<p> {this.state.description}</p>
						<LoginButton text={this.state.button_text}/>
					</h1>
				</div>
			</div>
		);
	}
}

export default Home;
