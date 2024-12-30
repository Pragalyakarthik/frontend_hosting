
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './Home.jsx';
import Contactus from './Contactus.jsx';
import Aboutus from './Aboutus.jsx';
import Abc from './Abc.jsx';
import './App.css';
import Footer from './Footer.jsx';

function App() {
  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.location.reload();
    }
  };

  return (
    <div>
      <Router>
        <nav>
          <ol style={{ listStyleType: "none" }}>
            <img
              className="logo"
              src="https://static.vecteezy.com/system/resources/thumbnails/011/006/658/small/letter-abc-monogram-modern-logo-free-vector.jpg"
              alt="Logo"
              onClick={handleLogoClick} 
              style={{ cursor: "pointer" }}
            />
            <li>
              <Link
                to="/"
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault(); 
                    window.location.reload(); 
                  }
                }}
              >
                ABC
              </Link>
            </li>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Aboutus">About Us</Link></li>
            <li><Link to="/Contactus">Contact Us</Link></li>
          </ol>
        </nav>
        <Routes>
          <Route path="/" element={<Abc />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;


