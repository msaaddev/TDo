import React, { Component } from 'react';
import LoginButton from '../button/LoginButton';
import './reset.css';
import './home.css';
import data from "../../data.json"

class Home extends Component {
	state = {
		title: data.title,
		description: data.description,
		button_text: data.button_text
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
