import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/register", {
        username,
        email,
        password,
      });

      response.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <form className="register_form" onSubmit={handleSubmit}>
        <div className="register_title">
          <h2>REGISTER</h2>
        </div>
        <div className="register_inputs">
          <div className="register_username">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="register_email">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="register_pass">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="register_btn">
            <button type="submit">Register</button>
          </div>
          {error && <span className="error" style={{color: "red"}}>Something went wrong!</span>}
        </div>
      </form>
    </div>
  );
};

export default Register;
