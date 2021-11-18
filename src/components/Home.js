import React from 'react';
import Posts from './Posts';
import Sidebar from './Sidebar';
import Header from './Header';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Posts />
            <Sidebar />
        </div>
    )
}

export default Home;
