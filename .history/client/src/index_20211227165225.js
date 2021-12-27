import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalContext } from "./Components/Context/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalContext></GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);
