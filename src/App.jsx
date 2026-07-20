import { useState } from 'react';
import Navbar from './navbar.jsx';
import MenuPage from './MenuPage.jsx';
import HomePage from './HomePage.jsx';
import AboutUs from './AboutUs.jsx';
import './App.css';
import React from 'react';

function App() {
  // 1. STATE (navigation)
  const [currentPage, setCurrentPage] = useState('home');

  // 2. SWITCHBOARD FUNCTION
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'MenuPage': 
        return <MenuPage setCurrentPage={setCurrentPage} />;
      case 'about': 
        return <AboutUs />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gradient-to-tr from-green-700 via-green-700 to-amber-500/20 min-h-screen flex flex-col m-0">
      {/* NAVBAR */}
      <Navbar setCurrentPage={setCurrentPage} />

      {/* WEBPAGES */}
      <main className="flex-grow">
        {renderPage()}
      </main>

    </div>
  );
}

export default App;