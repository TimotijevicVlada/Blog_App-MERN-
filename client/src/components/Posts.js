import React from 'react';
import Post from './Post';

const Posts = ({posts}) => {
    return (
        <div className="posts">
            {posts.map(item => (
                <Post key={item._id} post={item}/>
            ))}
        </div>
    )
}

export default Posts;
