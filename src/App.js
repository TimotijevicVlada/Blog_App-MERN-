import React from 'react';
import './style/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Home />
    </div>
  );
}

export default App;
