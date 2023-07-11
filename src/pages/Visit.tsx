import React from 'react';
import Page from '../components/Page';
import ExpoDates from '../components/visit/ExpoDates';
import VisitingHours from '../components/visit/VisitingHours';
import TicketPrices from '../components/visit/TicketPrices';
import TravelAccommodation from '../components/visit/TravelAccommodation';
import VenueMap from '../components/visit/VenueMap';


const VisitorDetailsPage = () => {
  return (
    <Page
      title="Visit"
      description="Welcome to our E3 Expo website. Explore the latest technologies and innovations in the electrical, broadcasting, and electro-mechanical industries. Join us for an exciting event!"
    >
    <div>
      {/* <h1>Visitor Details</h1> */}
      <ExpoDates />
      <VisitingHours />
      <TicketPrices />
      <TravelAccommodation />
      <VenueMap />
    </div>
    </Page>
  );
};

export default VisitorDetailsPage;
