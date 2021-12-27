import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { LoginPage } from "./Components/LoginPage";
import { NavBar } from "./Components/NavBar";
import "./Components/CSS/styles.css";
import { DashBoard } from "./Components/DashBoard";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
