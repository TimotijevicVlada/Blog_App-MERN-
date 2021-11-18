import React from "react";
import "./style/App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Single from "./components/Single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<Single />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
