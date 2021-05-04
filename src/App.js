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

export function List(props) {
  const kl = [
    { id: 1, name: "deepak sharma", content: "Welcome to the foundation" },
    { id: 2, name: "Soni sharma", content: "Welcome to the Basement" }
  ];

  const mk = kl.map(st => <li key={st.id}>{st.content}</li>);

  return <ul> {mk} </ul>;
}
