// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <h1>About Us</h1>
      
      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to connect alumni and students, creating a supportive network that fosters professional growth and community. 
          We are dedicated to providing valuable resources and opportunities for our members to excel and stay connected.
        </p>
      </div>
      
      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="John Doe" />
            <h3>Aditya Phule</h3>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Jane Smith" />
            <h3>Mugdha Choudhari</h3>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="David Lee" />
            <h3>Abhishek Parshetty</h3>
          </div>
        </div>
      </div>
      
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>Email: contact@alumniassociation.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Alumni Way, City, Country</p>
      </div>
    </section>
  );
};

export default AboutUs;
