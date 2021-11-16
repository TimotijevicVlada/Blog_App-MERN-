import React from 'react';
import Posts from './Posts';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        <div className="home">
            <Posts />
            <Sidebar />
        </div>
    )
}

export default Home;
