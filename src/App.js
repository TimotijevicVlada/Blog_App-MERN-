import React from 'react';
import './style/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Single from './components/Single';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Single />
      <Home />
    </div>
  );
}

export default App;
