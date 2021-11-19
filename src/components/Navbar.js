import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [user, setUser] = useState(false);

  return (
    <div className="navbar">
      <div className="nav_social">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-instagram-square"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-pinterest-square"></i>
      </div>
      <div className="nav_center">
        <span>
          <Link className="link" to="/">
            HOME
          </Link>
        </span>
        <span>
          <Link className="link" to="/about">
            ABOUT
          </Link>
        </span>
        <span>
          <Link className="link" to="/contact">
            CONTACT
          </Link>
        </span>
        <span>
          <Link className="link" to="/single">
            WRITE
          </Link>
        </span>
        <span>
          <Link className="link" to="/logout">
            LOGOUT
          </Link>
        </span>
      </div>
      <div className="nav_right">
        {user ? (
          <img
            src="https://www.freeiconspng.com/uploads/person-icon-8.png"
            alt="person_img"
          />
        ) : (
          <div className="nav_login_logout">
            <span>
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </span>
            <span>|</span>
            <span>
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </span>
          </div>
        )}
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;
