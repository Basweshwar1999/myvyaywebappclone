import React, { useState, useRef, useEffect, useMemo } from 'react';
import image1 from './r1.png'; // Replace with your logo path (profile picture)
import image2 from '../Images/662223285e627.png'; // Replace with your image path
import image3 from '../Images/66222302abbb2.png'; // Replace with your image path

function Profile() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(() => [image1, image2, image3], [image1, image2, image3]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index); // Update state with the clicked image index
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-info">
          <img src={image1} alt="Your Profile Picture" className="profile-picture" /> {/* Profile picture */}
          <h2>Basweshwar Madhavrao Gubge</h2> {/* Replace with your name */}
          <p>Date of Birth: 19-Jun-1999</p> {/* Replace with your date of birth */}
          <p>Job Position: Software Developer</p> {/* Replace with your job title */}
          <p>Degree: B.Tech in Information Technology</p> {/* Replace with your degree name */}
          {/* Add more info sections as needed */}
        </div>
        <div className="profile-image-slider">
          {images.map((image, index) => (
            <img
              key={index} // Required for proper rendering
              src={image}
              alt="Additional Image"
              className={`slider-image ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
