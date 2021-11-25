import React from "react";
import "./style/App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Single from "./components/Single";
import Login from "./components/Login";
import Register from "./components/Register";
import Write from "./components/Write";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/write" element={<Write />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
