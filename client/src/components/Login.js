import React, { useRef, useContext } from "react";
import { Context } from "../context/Context";
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefalut();
    dispatch({type: "LOGIN_START"});
    try {
        const response = await axios.post("/auth/login", {
            username: userRef.current.value,
            password: passwordRef.current.value
        })
        dispatch({type: "LOGIN_SUCCESS", payload: response.data});
    } catch (err) {
        dispatch({type: "LOGIN_FAILURE"});
    }
  };

  console.log(user)

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login_form">
        <div className="login_title">
          <h2>LOGIN</h2>
        </div>
        <div className="login_inputs">
          <div className="login_email">
            <input
              type="text"
              placeholder="Enter your username"
              ref={userRef}
            />
          </div>
          <div className="login_pass">
            <input
              type="password"
              placeholder="Enter your password"
              ref={passwordRef}
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
