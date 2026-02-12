import React, { useState } from 'react';
import './styles/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, title: 'Vienna Streets', location: 'Vienna', date: 'Oct 2024' },
    { id: 2, title: 'Morning Ride', location: 'Vienna', date: 'Oct 2024' },
    { id: 3, title: 'Café Moment', location: 'Vienna', date: 'Oct 2024' },
    { id: 4, title: 'Danube Views', location: 'Vienna', date: 'Oct 2024' },
    { id: 5, title: 'City Life', location: 'Vienna', date: 'Oct 2024' },
    { id: 6, title: 'Cycling Path', location: 'Vienna', date: 'Oct 2024' },
    { id: 7, title: 'Historic Center', location: 'Vienna', date: 'Oct 2024' },
    { id: 8, title: 'Evening Walk', location: 'Vienna', date: 'Oct 2024' },
    { id: 9, title: 'Study Session', location: 'Vienna', date: 'Oct 2024' }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={`https://picsum.photos/seed/gallery-${image.id}/400/400?grayscale`}
                alt={image.title}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>{image.title}</h3>
                  <p>{image.location} • {image.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img 
              src={`https://picsum.photos/seed/gallery-${selectedImage.id}/1200/800?grayscale`}
              alt={selectedImage.title}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.location} • {selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
