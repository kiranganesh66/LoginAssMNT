import { Component } from "react";

import "./index.css";

const loginDetail = [
  {
    username1: "Kiran66",
    password1: "Kiran@6",
  },
];

class Login extends Component {
  state = { username: "", password: "", active: false };

  userNameInput = (event) => {
    this.setState({ username: event.target.value });
  };

  userPssInput = (event) => {
    this.setState({ password: event.target.value });
  };

  logInSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const { username1, password1 } = loginDetail[0];

    // const hello = loginDetail.map((eachone) => {
    //   if (eachone.username.toLowerCase() !== toLowerCase(username)) {
    //     alert("User Not Found");
    //   } else if ((eachone.password.toLowerCase() !== password.toLowerCase()) {
    //     alert("Pass Not Found");
    //   }
    // });
    // // console.log(hello);

    if (username1.toLowerCase() !== username.toLowerCase()) {
      alert("User's not Exit");
    } else if (password1.toLowerCase() !== password.toLowerCase()) {
      alert("User's passWrd Wrong");
    } else {
      this.setState({ active: true });

      this.setState({ password: "", username: "" });
    }
  };

  render() {
    const { username, password, active } = this.state;
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
            type="text"
            onChange={this.userPssInput}
          />
          <br />
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        {active ? <p>Log In successfull</p> : ""}
      </div>
    );
  }
}

export default Login;
