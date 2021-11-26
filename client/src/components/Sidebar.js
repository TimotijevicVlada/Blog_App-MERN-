import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [cats, setCats] = useState([]);

  const fetchCat = async () => {
    const response = await axios.get("/categories");
    setCats(response.data);
  }

  useEffect(() => {
    fetchCat();
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar_title">
        <h3>ABOUT ME</h3>
      </div>
      <div className="sidebar_img">
        <img src="https://restorixhealth.com/wp-content/uploads/2018/08/No-Image.png" alt="person_image" />
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
          
          {
            cats.map(item => (
            <Link to={`/?cat=${item.name}`}>
              <span>{item.name}</span>
            </Link>
              ))
          }
          
          
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
