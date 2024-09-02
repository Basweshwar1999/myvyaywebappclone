import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Login';
import HomePage from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './Navbar';
import Footer from './Footer';
import Profile from './Profile'; // Assuming you have a ProfileSidebar component

import '../Styles/Style.css';

// Authentication Context (Optional)
const AuthContext = createContext({ isLoggedIn: false, setIsLoggedIn: () => {} });

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial login state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check for specific username and password
    if (username === 'basweshwar' && password === 'Rutik@1902') {
      // Login successful
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <BrowserRouter>
        <div className="app-container"> {/* Container for better styling */}
          {isLoggedIn && <Navbar />} {/* Conditionally render navbar */}
          <div className="body-content" style={{ padding: '10%'}}> {/* Container for body content */}
            <Routes>
              <Route
                path="/login"
                element={
                  <> {/* Fragment for consistent rendering */}
                    <header>
                      <h1 style={{ textAlign: 'center' }}>Basweshwar Login Form</h1>
                    </header>
                    <LoginPage
                      onLogin={handleLogin}
                      setUsername={setUsername}
                      setPassword={setPassword}
                    />
                    {/* <Footer /> */}
                  </>
                }
              />
              <Route
                path="/"
                element={
                  isLoggedIn ? (
                    <HomePage />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer /> {/* Footer always displayed */}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  ); 
}

export default Main;
export { AuthContext };
