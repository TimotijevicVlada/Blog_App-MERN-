import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { Context } from "../context/Context";
import axios from "axios";

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "UPDATE_START"});
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    }
    if(file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error)
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({type: "UPDATE_SUCCESS", payload: res.data})
    } catch (error) {
      dispatch({type: "UPDATE_FAILURE"});
    }

  };

  return (
    <div className="settings">
      <div className="settings_content">
        <div className="settings_title">
          <span>Update your Account</span>
          <span>Delete Account</span>
        </div>
        <form onSubmit={handleSubmit} className="settings_form">
          <div className="profile_picture_title">
            <h3>Profile Picture</h3>
          </div>
          <div className="settings_image">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <input
              id="fileInput"
              type="file"
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0]) }
            />
          </div>
          <div className="settings_input">
            <label>Username</label>
            <input 
              type="text" 
              placeholder={user.username} 
              name="name" 
              onChange={(e) => setUsername(e.target.value)}
              />
          </div>
          <div className="settings_input">
            <label>Email</label>
            <input
              type="email"
              placeholder={user.email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="settings_input">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <div className="settings_submit">
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
            {success && <span>Profile has been updated</span>}
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
