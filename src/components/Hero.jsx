import React from 'react';
import './styles/Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="decorative-line"></div>
            <h1 className="hero-headline">
              I'm Matteo, a student living in Vienna, Austria
            </h1>
            <p className="hero-description">
              At 20 years old, I'm navigating life in one of Europe's most beautiful cities. 
              I study, explore Vienna's streets, and ride my bike to school every day. 
              This is my way of living—simple, authentic, and full of moments worth capturing.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('gallery')}
              >
                Explore my life
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get in touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://picsum.photos/seed/matteo-hero/600/600?grayscale" 
              alt="Matteo"
              className="hero-image-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
