import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { LoginPage } from "./Components/LoginPage";

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
  //   console.log(text);
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
