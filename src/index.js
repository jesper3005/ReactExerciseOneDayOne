import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import Clock from "./Clock";
import Toggle from "./Toggle";

ReactDOM.render(
  <Clock msg="Welcome, World" />,
  document.getElementById("root")
);
//ReactDOM.render(<Toggle />, document.getElementById("root"));
