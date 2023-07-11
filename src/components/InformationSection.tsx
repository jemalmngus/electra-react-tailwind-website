import React from 'react';
import CountUp from 'react-countup';

const InformationSection: React.FC = () => {
  const partnersCount = 25; // Number of partners
  const industryExpertsCount = 10; // Number of industry experts
  const participantsCount = 500; // Number of participants
  const duration = '3 Days'; // Duration of the expo

  return (
    <section className="py-10 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Information</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <h3 className="text-4xl font-bold">
              <CountUp end={partnersCount} duration={2} separator="," />
            </h3>
            <p className="text-lg">Partners</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">
              <CountUp end={industryExpertsCount} duration={2} separator="," />
            </h3>
            <p className="text-lg">Industry Experts</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">
              <CountUp end={participantsCount} duration={2} separator="," />
            </h3>
            <p className="text-lg">Participants</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">{duration}</h3>
            <p className="text-lg">Expo Duration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
