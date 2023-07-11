import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChartLine,
  faUsers,
  faHandshake,
  faBriefcase,
  faLightbulb,
  faGlobe,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import BenefitsSection from "../components/BenefitsSection";

const ExhibitPage = () => {
  const benefitsData = [
    {
      title: "Raise Your Company Profile",
      icon: faStar,
      description:
        "Exhibit at E3 Expo to gain visibility and showcase your brand to a targeted audience. Increase your company's recognition and establish your presence in the industry.",
    },
    {
      title: "Explore New Business Opportunities",
      icon: faChartLine,
      description:
        "E3 Expo provides a platform to connect with industry professionals, potential clients, and partners. Expand your network, foster collaborations, and discover new business opportunities.",
    },
    {
      title: "Connect with Industry Experts",
      icon: faUsers,
      description:
        "Engage with industry experts, thought leaders, and decision-makers. Gain insights, exchange knowledge, and stay up-to-date with the latest trends and advancements in the electrical, broadcasting, and electro-mechanical sectors.",
    },
    {
      title: "Forge Strategic Partnerships",
      icon: faHandshake,
      description:
        "E3 Expo offers a conducive environment to establish strategic partnerships. Collaborate with like-minded companies, form alliances, and explore mutually beneficial collaborations for growth and success.",
    },
    {
      title: "Showcase Your Innovative Solutions",
      icon: faBriefcase,
      description:
        "Demonstrate your cutting-edge products and innovative solutions to a targeted audience. Highlight your technological advancements and position your company as a leader in the industry.",
    },
    {
      title: "Embrace Sustainable Solutions",
      icon: faLightbulb,
      description:
        "E3 Expo encourages and promotes sustainable practices. Showcase your eco-friendly solutions, renewable energy technologies, and sustainable initiatives to create a greener future.",
    },
    {
      title: "Expand Your Global Reach",
      icon: faGlobe,
      description:
        "E3 Expo attracts participants and visitors from around the world. Take the opportunity to expand your global reach, connect with international partners, and explore new markets.",
    },
    {
      title: "Contribute to Social Causes",
      icon: faHandsHelping,
      description:
        "Participating in E3 Expo allows you to support and contribute to social causes. Engage in CSR initiatives, promote social responsibility, and make a positive impact on the community and environment.",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8 relative">
        Exhibit at E3 Expo 2023
      </h1>
      
      <div className="text-center mx-auto max-w-lg mb-12">
        <p className="text-lg">
          Join us at E3 Expo 2023 to showcase your company, connect with
          industry professionals, and explore new business opportunities. Don't
          miss out on this exciting event!
        </p>
      </div>

      <BenefitsSection benefits={benefitsData} />

      {/* Rest of the exhibit page content */}
    </div>
  );
};

export default ExhibitPage;
