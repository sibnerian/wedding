import React from 'react';
import './Map.scss';

const Map = () => (
  <div className="map-container" id="map">
    <div className="location-description-container">
      <h1>Time & Place</h1>
      <p>
        The ceremony and reception will take place from <strong>5:30pm–11:00pm</strong> at the
        beautiful <strong>Philadelphia Cricket Club</strong> in Chestnut Hill.
      </p>
      <a href="https://saraandiantietheknot.anrsvp.com">
        <div className="cta">RSVP</div>
      </a>
    </div>
    <iframe
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJB0KzUwu5xokRcHGWc6_MCxc&key=AIzaSyBmPcHNPqPVxv0eQN9YIALVj_EWSFM0dh8"
      height="100%"
      width="100%"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default Map;
