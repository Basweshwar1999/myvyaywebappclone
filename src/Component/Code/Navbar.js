import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Style.css';
import r1 from './r1.png'; // Replace with your logo path
import logoImage from '../Images/download.jpeg'; // Replace with your logo path

// Assuming AuthContext is defined in App.js
import { AuthContext } from '../../App';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    });
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false); // Update login state in context
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
       <img src={logoImage} alt="Your Company Logo" className="logo" style={{marginLeft:20 ,boxShadow:'revert-layer'}} />
       <span className="navbar-name">Basweshwar</span>
      <ul style={{marginLeft:'10%'}}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        {isLoggedIn && ( // Conditionally render logout button if logged in
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      )}
      </ul>
      
      <Link to="/Profile">
        {/* <div style={{ marginRight: 90 }}> */}
          <img src={r1} alt="Your Company Logo" className="r1" style={{marginRight:20,marginTop:20}} />
        {/* </div> */}
      </Link>
    </nav>
  );
}

export default Navbar;
