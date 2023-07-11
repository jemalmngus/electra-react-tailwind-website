import React from 'react';

const VenueMap = () => {
  return (
    <div>
      <h2>Venue Map</h2>
      <p>Address: Millennium Hall, Addis Ababa, Ethiopia</p>
      <div className="mt-4">
        <iframe
          title="Venue Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15753.942684978423!2d38.7636364!3d9.001514299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1632bea3ed704aa9%3A0x6f44f6d5ea8c2f9e!2sMillennium%20Hall!5e0!3m2!1sen!2sus!4v1667251234567!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VenueMap;
