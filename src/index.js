import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Foot } from "./App";
import { Lick } from "./App";
import { Toggle } from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Foot />, document.getElementById("footer"));
ReactDOM.render(<Lick />, document.getElementById("root"));
ReactDOM.render(<Toggle />, document.getElementById("third"));
