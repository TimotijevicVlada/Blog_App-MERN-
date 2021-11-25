import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_title">
        <h3>ABOUT ME</h3>
      </div>
      <div className="sidebar_img">
        <img src="" alt="person_image" />
      </div>
      <div className="sidebar_text"> 
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta culpa
          numquam consectetur. Repellendus similique alias maxime consequatur
          voluptate nemo! Unde facilis laudantium provident inventore. Adipisci
          ipsa fuga excepturi ex aut!
        </p>
      </div>
      <div className="sidebar_title">
            <h3>CATEGORIES</h3>
      </div>
      <div className="sidebar_categories">
            <div>
                <span>Life</span>
                <span>Style</span>
                <span>Tech</span>
            </div>
            <div>
                <span>Music</span>
                <span>Sport</span>
                <span>Cinema</span>
            </div>
      </div>
      <div className="sidebar_title">
          <h3>
              FOLLOW US
          </h3>
      </div>
      <div className="sidebar_social">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-pinterest-square"></i>
      </div>
    </div>
  );
};

export default Sidebar;
