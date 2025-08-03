import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Tips from './components/Tips';
import Services from './components/Services';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle body class on dark mode change
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mt-4 flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
