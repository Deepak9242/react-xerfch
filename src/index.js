import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { FormControl } from "./App";
import { list_ab } from "./App";

//ReactDOM.render(<App />, document.getElementById("footer"));
ReactDOM.render(<FormControl array={list_ab}/>, document.getElementById("third"));
