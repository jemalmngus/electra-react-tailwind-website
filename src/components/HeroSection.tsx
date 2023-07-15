import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const targetText = "Welcome to E3 Expo 2023 ";
  const startingIndex = 8; // Index where the "Welcome" portion ends

  useEffect(() => {
    let currentIndex = startingIndex;

    const typingInterval = setInterval(() => {
      setTypedText(targetText.slice(0, currentIndex));
      currentIndex++;

      if (currentIndex > targetText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section
      className="bg-gray-900 text-white py-20"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080')", backgroundSize: 'cover' }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center">
          {typedText}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center">
          Discover the latest innovations and opportunities in electrical, broadcasting, and electro mechanical industries.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 mt-10 rounded-full shadow-lg">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
