import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav_social">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-pinterest-square"></i>
            </div>
            <div className="nav_center">
                <span>HOME</span>
                <span>ABOUT</span>
                <span>CONTACT</span>
                <span>WRITE</span>
                <span>LOGOUT</span>
            </div>
            <div className="nav_right">
                <img src="https://www.freeiconspng.com/uploads/person-icon-8.png" alt="person_img" />
                <i class="fas fa-search"></i>
            </div>
        </div>
    )
}

export default Navbar;
