import React, { useState } from 'react';
import playIcon from '../assets/play-icon.svg';

const AboutE3Section: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const iconColor = isHovered ? 'text-green-500' : isFocused ? 'text-yellow-500' : 'text-black';

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="relative lg:w-1/2 mb-6 lg:mb-0">
            <img src="https://dummyimage.com/500x300/ccc/000" alt="About E3" className="w-full h-auto rounded-lg" />
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${iconColor}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onFocus={handleFocus}
              onBlur={handleBlur}
              tabIndex={0}
            >
              <img src={playIcon} alt="Play Video" className="w-12 h-12 transition-all duration-300 transform hover:scale-110" />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl font-bold text-green-500 mb-4">About E3 Expo</h2>
            <p>
              The E3 Expo is an annual exhibition that brings together leading companies and professionals in the electrical,
              broadcasting, and electro-mechanical industries. With a focus on innovation and future technologies, the E3 Expo
              provides a platform for networking, showcasing products, and discovering new business opportunities.
            </p>
            <p>
              It offers a unique opportunity for government utilities, electrical trading companies, wholesale & manufacturers,
              media companies, and more to connect and explore smart solutions, energy consumption & management, and industrial
              automation advancements.
            </p>
            <p>
              Join us at the E3 Expo to witness the latest innovations, interact with industry experts, and explore new business
              prospects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutE3Section;
