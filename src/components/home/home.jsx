import React, { Component } from "react";
import LoginButton from "../button/Button";
import "./reset.css";
import "./home.css";
import data from "../../data.json";

class Home extends Component {
  state = {
    title: data.title,
    description: data.description,
    login_button_text: data.login_button_text,
    sign_up_button_text: data.signup_button_text
  };

  // sarim was here
  render() {
    return (
      <div className="main_container">
        <div className="overlay">
          <h1 id="welcome_title">
            {this.state.title}
            <p> {this.state.description}</p>
            <LoginButton text={this.state.login_button_text} />
            <LoginButton text={this.state.sign_up_button_text} />
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
