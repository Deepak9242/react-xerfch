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

export {Foot};

class Foot extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      time: new Date()
    };
  }
  tick()
  {
    this.setState({
      time: new Date()
    });
  }
  componentDidMount()
  {
    setInterval(()=>this.tick(),1000);

  }
  componentWillUnmount()
  {

  }

  render()
  {
  
  return (
    <div>
    <h1>Hello my name is deepak </h1>
    <h2> The Time is :- {new Date().toLocaleTimeString()} </h2>
    </div>
    
  )
  }

 
}

export function Lick()
{
  function handleclick(e)
  {
    e.preventDefault();
    console.log("the button was clicked");
  }

  return(
    <a href="#" onClick={handleclick}>Click me
    </a>
  );
}

export class Toggle extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={istoggle: true};
    this.handleclick=this.handleclick.bind(this);
  }

  handleclick()
  {
    this.setState(state=>({
      istoggle: !state.istoggle
    }));
  }

  render()
  {
    return(
      <button onClick={this.handleclick}> {this.state.istoggle?'YES':'NO'}</button>
    );
  }
}

