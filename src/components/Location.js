import React from 'react';
import './Home.css';

const Location = () => {
  return (
    <div className="location-container" id="location">
      <h2 className="location-title"> Location</h2>
      <p>1475 Albion Rd, Etobicoke, ON M9V 1B1</p>
      <iframe
        className='map'
        title="My Map"
        width="400"
        height="400"
        loading="lazy"
        allowFullScreen
        src={"https://www.google.com/maps/embed/v1/place?key=API_KEY&q=Shahnawaz+Auto+Care,Etobicoke+ON"} //API KEY
      ></iframe>
    </div>
  );
};
export default Location;
