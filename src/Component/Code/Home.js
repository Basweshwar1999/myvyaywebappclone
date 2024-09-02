import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar.js is in the same directory
import '../Styles/Style.css'; // Import your CSS stylesheet

function Home({ isActive }) {
  return (
    <div className="home-container">
      {/* <Navbar isActive={isActive} /> Pass isActive prop to Navbar */}
      <main>
        <section className="hero">
          {/* Add your hero image or video here */}
          <div className="hero-text">
            <h1>Welcome to the Website!</h1>
            <p>I build innovative software solutions.</p>
          </div>
        </section>
        <section className="home-content">
          <h2>What I Do</h2>
          <p>
            (Describe your development expertise and the kind of projects you work on). 
          </p>
          <h2>Why Choose Me?</h2>
          <p>
            (Highlight your unique strengths and value proposition as a developer). 
          </p>
        </section>
      </main>
    </div>
  );
}

export default Home;
