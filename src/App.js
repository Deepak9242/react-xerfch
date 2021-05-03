import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

export function User(props) {
  return <h1> Welcome back {props.name}</h1>;
}

export function Guest(props) {
  return <h1> Please Sign Up </h1>;
}

export function Greeting(props) {
  const logg = props.log;
  const nameex = props.name;
  if (logg) {
    return <User name={nameex} />;
  }
  return <Guest />;
}

export function LoginButton(props) {
  return <button onClick={props.onClick}> Login </button>;
}

export function LogoutButton(props) {
  return <button onClick={props.onClick}> Logout </button>;
}

export class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      log: true
    };
  }

  handleLogin() {
    this.setState({ log: true });
  }

  handleLogout() {
    this.setState({ log: false });
  }

  render() {
    let logg = this.state.log;
    let button;
    if (logg) {
      button = <LoginButton onClick={this.handleLogout} />;
    } else {
      button = <LogoutButton onClick={this.handleLogin} />;
    }

    return (
      <div>
        <Greeting log={this.state.log} name="deepak" />
        {button}
      </div>
    );
  }
}
