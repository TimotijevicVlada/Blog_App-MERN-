import React from "react";
import Sidebar from "./Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings_content">
        <div className="settings_title">
          <span>Update your Account</span>
          <span>Delete Account</span>
        </div>
        <form className="settings_form">
          <div className="profile_picture_title">
            <h3>Profile Picture</h3>
          </div>
          <div className="settings_image">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <div className="settings_input">
            <label>Username</label>
            <input type="text" placeholder="Vladimir Timotijevic" name="name" />
          </div>
          <div className="settings_input">
            <label>Email</label>
            <input type="email" placeholder="timotijevicvlada@gmail.com" name="email" />
          </div>
          <div className="settings_input">
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" />
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
