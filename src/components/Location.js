import React from 'react';
import './Home.css';

const Location = () => {
  return (
    <div className="location-container" id="location">
      Location
      <br/>
      <iframe
        title="My Map"
        width="400"
        height="400"
        loading="lazy"
        allowFullScreen
        src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBUFMf-Arl3wQKwvDrxJwSU49-pBXD9JvI&q=Shahnawaz+Auto+Care,Etobicoke+ON"}
      ></iframe>
    </div>
  );
};
export default Location;
