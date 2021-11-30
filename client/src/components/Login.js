import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";

const Login = () => {

  const { dispatch } = useContext(Context);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
        const res = await axios.post("/auth/login", {
            username: username,
            password: password
        })
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        
    } catch (err) {
        dispatch({type: "LOGIN_FAILURE"});
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="login_form">
        <div className="login_title">
          <h2>LOGIN</h2>
        </div>
        <div className="login_inputs">
          <div className="login_email">
            <input
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login_pass">
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login_btn">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
