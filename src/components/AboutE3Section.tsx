import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const AboutE3Section: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const iconColor = isHovered ? 'text-white' : isFocused ? 'text-white' : 'text-white';
  const iconBackground = isHovered ? 'bg-green-500' : isFocused ? 'bg-green-500' : 'bg-yellow-500';
const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="relative lg:w-1/2 mb-6 lg:mb-0">
            <img src="https://picsum.photos/500/300" alt="About E3" className="w-full h-auto rounded-lg" />
            {isVideoPlaying ? (
               <video
               className="w-full h-full rounded-lg absolute top-0 left-0"
               
               autoPlay
               controls
               >
               <source src={src} type="video/mp4" />
              
             </video>
            ) : (
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${iconColor} ${iconBackground} flex items-center justify-center w-16 h-16 rounded-full`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={0}
                onClick={handleVideoPlay}
              >
                <FaPlay className="text-3xl" />
              </div>
            )}
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl font-bold text-green-500 mb-4">About E3 Expo</h2>
            <p className="mb-4">
              The E3 Expo is an annual exhibition that brings together leading companies and professionals in the electrical,
              broadcasting, and electro-mechanical industries. With a focus on innovation and future technologies, the E3 Expo
              provides a platform for networking, showcasing products, and discovering new business opportunities.
            </p>
            <p className="mb-4">
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
