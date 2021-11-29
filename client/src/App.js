import React, {useContext} from "react";
import "./style/App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Single from "./components/Single";
import Login from "./components/Login";
import Register from "./components/Register";
import Write from "./components/Write";
import Settings from "./components/Settings";
import { Context } from "./context/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const {user} = useContext(Context);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/write" element={user ? <Write /> : <Register />}/>
          <Route path="/login" element={user ? <Home /> : <Login />}/>
          <Route path="/register" element={user ? <Home /> : <Register />}/>
          <Route path="/settings" element={user ? <Settings /> : <Register />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
