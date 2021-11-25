import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router";
import axios from "axios";

const SignlePost = () => {

  
  

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  const getPost = useCallback ( async () => {
    const response = await axios.get("/posts/" + path);
    setPost(response.data);
  }, [path])
  useEffect(() => {
    getPost();
  }, [getPost])

   console.log(post)

  return (
    <div className="single_post">
      <div className="single_post_image">
        {post.photo && 
        <img
          src={post.photo}
          alt="nature_img"
        />
        }
        
      </div>
      <div className="single_post_events">
        <i className="far fa-edit"></i>
        <i className="fas fa-trash-alt"></i>
      </div>
      <div className="single_post_title">
        <h2>{post.title}</h2>
      </div>
      <div className="single_post_author_time">
        <span>Author: {post.username}</span>
        <span>{new Date(post.createdAt).toDateString()}</span>
      </div>
      <div className="single_post_text">
        <p>
         {post.desc}
        </p>
      </div>
    </div>
  );
};

export default SignlePost;
