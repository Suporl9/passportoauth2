import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        <Route path="/" exact component={}/>
      </Switch>
    </Router>
    );
}

export default App;
