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

export function MailBox(props) {
  const msg = props.number;
  let body;
  if (msg > 0) {
    body = <h2> You have {msg} Unread message </h2>;
  } else {
    body = <h2> You have No Unread messages </h2>;
  }

  return body;
}

export class MailControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.state = {
      num: 0
    };
  }

  handleClick() {
    this.setState(state => ({
      num: state.num + 1
    }));
  }

  handleBack() {
    if (this.state.num > 0) {
      this.setState(state => ({
        num: state.num - 1
      }));
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Add </button>

        <button onClick={this.handleBack}> Dec </button>
        <MailBox number={this.state.num} />
      </div>
    );
  }
}
