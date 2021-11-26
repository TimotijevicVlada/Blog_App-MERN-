import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const SignlePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState([]);

  const getPost = useCallback(async () => {
    const response = await axios.get("/posts/" + path);
    setPost(response.data);
  }, [path]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div className="single_post">
      <div className="single_post_image">
        {post.photo ? (
          <img src={post.photo} alt="nature_img" />
        ) : (
          <img
            src="https://lh3.googleusercontent.com/proxy/ixWOzv8ulLDs799HHt0Xjyqyy_LaJ0WkSuTSJ9oafP-jfde0fDlwJQHnR_PHDryMWMRUs1VnW19OoVoVq8QWjPgLW5Af6cyxGpBT2sA"
            alt="no_image_found"
          />
        )}
      </div>
      <div className="single_post_events">
        <i className="far fa-edit"></i>
        <i className="fas fa-trash-alt"></i>
      </div>
      <div className="single_post_title">
        <h2>{post.title}</h2>
      </div>
      <div className="single_post_author_time">
        <Link to={`/?user=${post.username}`} className="link">
          <span>Author: {post.username}</span>
        </Link>
        
        <span>{new Date(post.createdAt).toDateString()}</span>
      </div>
      <div className="single_post_text">
        <p>{post.desc}</p>
      </div>
    </div>
  );
};

export default SignlePost;
