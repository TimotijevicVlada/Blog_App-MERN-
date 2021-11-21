import React from 'react';
import Posts from './Posts';
import Sidebar from './Sidebar';
import Header from './Header';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="home_content">
               <Posts />
               <Sidebar /> 
            </div>
        </div>
    )
}

export default Home;
