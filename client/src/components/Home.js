import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get("/posts");
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="home_content">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
