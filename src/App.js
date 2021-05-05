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

export class FormControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      list: []
    };
  }

  handleChange(value) {
    this.setState(state => ({
      list: [...state.list, value]
    }));
  }

  render() {
    return (
      <div>
        <Form submit={this.handleChange} />
        <Dropdown list={this.state.list} />
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleName = this.handleName.bind(this);
    this.Clear = this.Clear.bind(this);
    this.state = {
      temp: "",
      name: ""
    };
  }

  handleName() {
    this.setState(state => ({
      name: state.temp
    }));
    setInterval(this.Clear, 2000);
  }
  Clear() {
    this.setState({
      name: ""
    });
  }

  handleClick(e) {
    this.props.submit(this.state.temp);
    this.handleName();
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      temp: e.target.value
    });
  }

  render() {
    let body;
    if (this.state.name != "") {
      body = <h1>{this.state.name} added successfully </h1>;
    } else {
      body = null;
    }

    return (
      <div>
        <form onSubmit={this.handleClick}>
          <label> Name: </label>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {body}
      </div>
    );
  }
}

function Dropdown(props) {
  let body = null;
  const li = props.list;
  const mp = li.map(x => <option value={x.toString}>{x}</option>);

  return (
    <div>
      <hr />
      <select onChange={() => handleChange}>{mp}</select>
      {body}
    </div>
  );
}
