import React from 'react';
import { MdDirectionsBike, MdRoute, MdTimer } from 'react-icons/md';
import './styles/Cycling.css';

const Cycling = () => {
  const cyclingCards = [
    {
      bike: 'City Bike',
      route: 'To School',
      distance: '5.2 km',
      time: '18 min',
      title: 'Morning Commute',
      description: 'Every morning starts with a ride through Vienna\'s streets. The fresh air, the rhythm of pedaling, and the city waking up around me—it\'s the perfect way to begin the day.',
      image: 'morning-commute'
    },
    {
      bike: 'City Bike',
      route: 'Danube Path',
      distance: '12 km',
      time: '45 min',
      title: 'Weekend Adventure',
      description: 'Weekends are for longer rides along the Danube. Exploring new paths, discovering hidden spots, and feeling the freedom that comes with two wheels.',
      image: 'weekend-adventure'
    },
    {
      bike: 'City Bike',
      route: 'City Routes',
      distance: '8 km',
      time: '30 min',
      title: 'City Routes',
      description: 'Vienna\'s bike-friendly infrastructure makes every ride a pleasure. From historic districts to modern neighborhoods, cycling connects me to every part of the city.',
      image: 'city-routes'
    }
  ];

  return (
    <section id="cycling" className="cycling section">
      <div className="container">
        <div className="cycling-header">
          <h2 className="section-title">My Daily Ride</h2>
          <button className="btn btn-secondary">View all rides</button>
        </div>
        <div className="cycling-cards">
          {cyclingCards.map((card, index) => (
            <div key={index} className="cycling-card">
              <div className="card-image">
                <img 
                  src={`https://picsum.photos/seed/cycling-${index}/400/300?grayscale`}
                  alt={card.title}
                  className="card-image-img"
                />
                <div className="card-metadata">
                  <div className="metadata-item">
                    <MdDirectionsBike className="metadata-icon" />
                    <span>{card.bike}</span>
                  </div>
                  <div className="metadata-item">
                    <MdRoute className="metadata-icon" />
                    <span>{card.route}</span>
                  </div>
                  <div className="metadata-item">
                    <MdTimer className="metadata-icon" />
                    <span>{card.distance} • {card.time}</span>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cycling;
