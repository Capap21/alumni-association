// src/components/Gallery.js
import React from 'react';
import './Gallery.css';
import event1 from "../../assets/event1.jpg";

const images = [
  event1,
  event1,
  event1,
  event1,
  event1,
  event1,
  event1
  
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Alumni Event ${index + 1}`} />
            <div className="overlay">
              <p>Event #{index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
