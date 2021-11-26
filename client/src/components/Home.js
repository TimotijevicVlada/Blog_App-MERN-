import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  const fetchPosts = async () => {
    const response = await axios.get("/posts" + search);
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

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
