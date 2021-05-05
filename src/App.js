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
    const names = props.array;
    const tags = names.map(n => <option value={n.toString()}>{n}</option>);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: "",
      options: tags
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
  componentDidUpdate() {
    this.render();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <select value={this.state.value} onChange={this.handleChange}>
            {this.state.options}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export class FormControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: [],
      temp: ""
    };
  }
  handleChange(e) {
    this.setState({
      temp: e.target.value
    });
  }
  handleSubmit(e) {
    this.setState(state => ({
      value: [...state.value, state.temp]
    }));
    this.props.
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter the value:</label>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <Form array={this.props.array} />
        <h1>{this.state.value}</h1>
      </div>
    );
  }
}
