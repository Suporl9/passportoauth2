import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router";
import { HomePage } from "./Components/HomePage";

function App() {
  // const obj = { a: "a", b: "b" };
  // const sendDataToServer = async () => {
  //   await axios
  //     .post("/api/", obj, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((resp) => console.log(resp.data));
  //   // console.log(text);
  // };

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
