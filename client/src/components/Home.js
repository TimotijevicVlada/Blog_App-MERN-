import React, { useState, useEffect, useCallback } from "react";
import Posts from "./Posts";
import Header from "./Header";
import axios from "axios";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  const fetchPosts = useCallback( async () => {
    const response = await axios.get("/posts" + search);
    setPosts(response.data);
  }, [search]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="home">
      <Header />
      <div className="home_content">
        <Posts posts={posts}/>
      </div>
    </div>
  );
};

export default Home;
