import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="post_img">
        <img
          src="https://travelwithkat.com/wp-content/uploads/2017/08/oak-alley-plantation.jpg"
          alt="post_image"
        />
      </div>
      <div className="post_header">
        <span>Music</span>
        <span>Cinema</span>
      </div>
      <div className="post_title">
        <h3>Lorem ipsum dolor sit amet</h3>
      </div>
      <div className="post_time">
        <span>1 hour ago</span>
      </div>
      <div className="post_text">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, id
          vitae cupiditate dolorem pariatur ducimus quasi quae praesentium eos,
          vero aliquam nisi, quaerat aspernatur labore perspiciatis dolor saepe
          facere ad.
        </p>
      </div>
    </div>
  );
};

export default Post;
