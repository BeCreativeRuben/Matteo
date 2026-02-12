import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-images">
            <div className="image-grid">
              <div className="image-item image-item-1">
                <img 
                  src="https://picsum.photos/seed/matteo-about-1/600/300?grayscale" 
                  alt="Matteo lifestyle"
                  className="about-image"
                />
              </div>
              <div className="image-item image-item-2">
                <img 
                  src="https://picsum.photos/seed/matteo-about-2/300/300?grayscale" 
                  alt="Matteo with girlfriend"
                  className="about-image"
                />
              </div>
              <div className="image-item image-item-3">
                <img 
                  src="https://picsum.photos/seed/matteo-about-3/300/300?grayscale" 
                  alt="Matteo studying"
                  className="about-image"
                />
              </div>
            </div>
          </div>
          <div className="about-text">
            <h2 className="section-title">About me</h2>
            <div className="about-description">
              <p>
                I'm Matteo, 20 years old, and I've made Vienna my home. Living here with my girlfriend, 
                I've discovered a rhythm of life that perfectly balances study, exploration, and the simple 
                joy of movement.
              </p>
              <p>
                As a student, I'm constantly learning and growing, but my education extends far beyond the 
                classroom. Every day, I ride my bike to school—it's not just transportation, it's my way of 
                connecting with the city, staying active, and starting each day with purpose.
              </p>
              <p>
                Vienna has become more than just a place I live; it's where I've found my pace. The historic 
                streets, the café culture, the bike paths along the Danube—each element shapes my daily 
                experience. This website is a glimpse into that world, a collection of moments that define 
                my way of living.
              </p>
            </div>
            <button className="btn btn-primary">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
