import React from "react";
import HeroSection from "../components/HeroSection";
import AboutE3Section from "../components/AboutE3Section";
import RegistrationCTASection from "../components/RegistrationCTASection";
import PartnersSection from "../components/PartnersSection";
import FocusAreasSection from "../components/FocusAreasSection";
import ScheduleSpeakersSection from "../components/ScheduleSpeakersSection";
import ContactSection from "../components/ContactSection";
import CategoriesSection from "../components/CategoriesSection";
import Countdown from "../components/Countdown";
import InformationSection from "../components/InformationSection";
import Page from "../components/Page";
import AttendeesSection from "../components/AttendeesSection";
import ScheduleSection from "../components/ScheduleSection";
import Testimonial from "../components/Testimonials";

const Home: React.FC = () => {
  return (
    <Page
      title="Home"
      description="Welcome to our E3 Expo website. Explore the latest technologies and innovations in the electrical, broadcasting, and electro-mechanical industries. Join us for an exciting event!"
    >
      <div>
        <HeroSection />
        <AboutE3Section />
        <RegistrationCTASection />
        <Countdown />
        <AttendeesSection />
        <CategoriesSection />
        <InformationSection />
        <ScheduleSection />
        <PartnersSection />
        <FocusAreasSection />
        <ScheduleSpeakersSection />
        <ContactSection />
        <Testimonial />
      </div>
    </Page>
  );
};

export default Home;
