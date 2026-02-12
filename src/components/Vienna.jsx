import React from 'react';
import { MdLocationOn, MdCalendarToday, MdExplore } from 'react-icons/md';
import './styles/Vienna.css';

const Vienna = () => {
  const viennaCards = [
    {
      location: 'Vienna, Austria',
      date: 'Oct 15, 2024',
      activity: 'City Exploration',
      title: 'Morning Coffee',
      description: 'Starting the day at a traditional Viennese café, surrounded by the city\'s historic charm and the aroma of freshly brewed coffee.',
      image: 'morning-coffee'
    },
    {
      location: 'Vienna, Austria',
      date: 'Oct 20, 2024',
      activity: 'Historic Architecture',
      title: 'Historic Center',
      description: 'Wandering through the UNESCO World Heritage streets, where every corner tells a story of Vienna\'s rich cultural heritage.',
      image: 'historic-center'
    },
    {
      location: 'Vienna, Austria',
      date: 'Oct 25, 2024',
      activity: 'Riverside Views',
      title: 'Danube Views',
      description: 'Evening walks along the Danube, watching the city lights reflect on the water as the day transitions to night.',
      image: 'danube-views'
    }
  ];

  return (
    <section id="vienna" className="vienna section">
      <div className="container">
        <div className="vienna-header">
          <h2 className="section-title">Life in Vienna</h2>
          <button className="btn btn-secondary">Explore Vienna</button>
        </div>
        <div className="vienna-cards">
          {viennaCards.map((card, index) => (
            <div key={index} className="vienna-card">
              <div className="card-image">
                <img 
                  src={`https://picsum.photos/seed/vienna-${index}/400/300?grayscale`}
                  alt={card.title}
                  className="card-image-img"
                />
                <div className="card-metadata">
                  <div className="metadata-item">
                    <MdLocationOn className="metadata-icon" />
                    <span>{card.location}</span>
                  </div>
                  <div className="metadata-item">
                    <MdCalendarToday className="metadata-icon" />
                    <span>{card.date}</span>
                  </div>
                  <div className="metadata-item">
                    <MdExplore className="metadata-icon" />
                    <span>{card.activity}</span>
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

export default Vienna;
