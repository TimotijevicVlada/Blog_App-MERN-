import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_title">
        <h3>ABOUT ME</h3>
      </div>
      <div className="sidebar_img">
        <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt="person_image" />
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
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-pinterest-square"></i>
      </div>
    </div>
  );
};

export default Sidebar;
