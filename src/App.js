import React from "react";
import "./style.css";

export default function App() {
  const nm = [1, 2, 3, 4, 5, 6, 7, 8];
  const dm = nm.map(x => <li key={x.toString()}>{x * 2}</li>);
  return (
    <div>
      <h1>{nm}</h1>
      <ul>{dm}</ul>
    </div>
  );
}

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: "Deepak "
    };
  }

  handleChange(event) {
    this.setState(state => ({
      value: event.target.value
    }));
  }
  handleSubmit(event) {
    alert("The Entry is---" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
