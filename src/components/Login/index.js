import { Component } from "react";
import Home from "../Home";

import "./index.css";

const loginDetail = [
  {
    username1: "Kiran66",
    password1: "Kiran@6",
  },
];

class Login extends Component {
  state = { username: "", password: "", active: false, listofJokes: [] };

  userNameInput = (event) => {
    this.setState({ username: event.target.value });
  };

  userPssInput = (event) => {
    this.setState({ password: event.target.value });
  };

  logInSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const { username1, password1 } = loginDetail[0];

    if (username1.toLowerCase() !== username.toLowerCase()) {
      alert("User's not Exit");
    } else if (password1 !== password) {
      alert("User's passWrd Wrong");
    } else {
      this.setState({ active: true });

      this.setState({ password: "", username: "" });
    }

    const url =
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10";
    const option = {
      method: "Get",
    };
    const response = await fetch(url, option);
    const data = await response.json();
    const jokes = data.jokes;
    const hs = jokes;
    const listofJoke = [];
    for (let i in hs) {
      listofJoke.push(hs[i].joke);
    }

    this.setState({ listofJokes: listofJoke });
  };

  loginPage = () => {
    const { username, password } = this.state;

    return (
      <div className="LogInCont">
        <form onSubmit={this.logInSubmit}>
          <label forhtml="userN" className="input-label">
            UserName
          </label>
          <br />
          <input
            id="userN"
            value={username}
            type="text"
            onChange={this.userNameInput}
          />
          <br />
          <label forhtml="userpss" className="input-label">
            password
          </label>
          <br />
          <input
            id="userpss"
            value={password}
            type="password"
            onChange={this.userPssInput}
          />
          <br />
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <h3>Use Below Credentials</h3>
        <p>Username : kiran66</p>
        <p>Password : Kiran@6</p>
      </div>
    );
  };

  render() {
    const { active, listofJokes } = this.state;

    return (
      <>{active ? <Home listofJokes={listofJokes} /> : this.loginPage()}</>
    );
  }
}

export default Login;
