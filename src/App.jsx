import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <div className={`${darkMode && "dark"} `}>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
