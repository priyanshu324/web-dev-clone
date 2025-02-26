
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// Importing styles
import './App.css';
import './styles/style.css';

// Importing components
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    // Using React Fragment for cleaner markup
    <>
      {/* Conditional class to apply dark mode */}
      <div className={darkMode ? 'dark' : ''}>
        {/* Navigation bar with dark mode toggle */}
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Outlet for rendering child routes */}
        <Outlet />

        {/* Footer component */}
        <Footer />
      </div>
    </>
  );
}

export default App;