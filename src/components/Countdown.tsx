import React, { useState, useEffect } from 'react';

const CountdownSection: React.FC = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2023-09-09T00:00:00Z');

    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate.getTime() - now.getTime();

      const remainingDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const remainingMinutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const remainingSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setDays(remainingDays);
      setHours(remainingHours);
      setMinutes(remainingMinutes);
      setSeconds(remainingSeconds);

      if (timeRemaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-10 bg-gradient-to-r from-blue-500 to-blue-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Countdown to Grand Opening</h2>
        <div className="flex items-center justify-center mb-6">
          <div className="text-6xl text-center">
            <span className="block text-7xl font-bold text-white">{days}</span>
            <span className="block text-2xl text-gray-400">Days</span>
          </div>
          <div className="h-12 w-px bg-white mx-8"></div>
          <div className="text-6xl text-center">
            <span className="block text-7xl font-bold text-white">{hours}</span>
            <span className="block text-2xl text-gray-400">Hours</span>
          </div>
          <div className="h-12 w-px bg-white mx-8"></div>
          <div className="text-6xl text-center">
            <span className="block text-7xl font-bold text-white">{minutes}</span>
            <span className="block text-2xl text-gray-400">Minutes</span>
          </div>
          <div className="h-12 w-px bg-white mx-8"></div>
          <div className="text-6xl text-center">
            <span className="block text-7xl font-bold text-white">{seconds}</span>
            <span className="block text-2xl text-gray-400">Seconds</span>
          </div>
        </div>
        <p className="text-lg text-center text-white">Join us on September 9, 2023 for an exciting event!</p>
      </div>
    </section>
  );
};

export default CountdownSection;
