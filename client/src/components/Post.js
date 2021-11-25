import React from "react";
import {Link} from 'react-router-dom';

const Post = ({post}) => {
  return (
    <div className="post">
      <div className="post_img">
        <Link to={`/post/${post._id}`}>
          <img
          src="https://travelwithkat.com/wp-content/uploads/2017/08/oak-alley-plantation.jpg"
          alt="post_image"
        />
        </Link>
      </div>
      <div className="post_header">
        {post.categories.map(item => (
            <span>{item.name}</span>
        ))}
      </div>
      <div className="post_title">
        <h3>{post.title}</h3>
      </div>
      <div className="post_time">
        <span>{new Date(post.createdAt).toDateString()}</span>
      </div>
      <div className="post_text">
        <p>
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default Post;
