import React from "react";
import "./style.css";

export default function App() {
  const nm = [1, 2, 3, 4, 5, 6, 7, 8];
  const dm = nm.map(x => <li>{x * 2}</li>);
  return (
    <div>
      <h1>{nm}</h1>
      <ul>{dm}</ul>
    </div>
  );
}
