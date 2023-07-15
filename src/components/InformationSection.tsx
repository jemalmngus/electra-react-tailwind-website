import React from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaUsersCog, FaUserFriends, FaClock, FaVolumeUp } from 'react-icons/fa';

const InformationSection: React.FC = () => {
  const infoData = [
    { icon: <FaUsers />, count: 25, text: 'Partners' },
    { icon: <FaUsersCog />, count: 10, text: 'Industry Experts' },
    { icon: <FaUserFriends />, count: 500, text: 'Participants' },
    { icon: <FaClock />, count: 3, text: 'Expo Duration' },
    { icon: <FaVolumeUp />, count: 5, text: 'Speakers' },
  ];

  const speakersCount = 5; // Number of speakers

  return (
    <section className="py-10 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Information</h2>
        <p className="text-lg text-center text-white mb-8">Get all the details about the event</p>
        <div className="flex justify-evenly items-center">
          {infoData.map((item, index) => (
            <div className="text-center flex flex-col items-center " key={index}>
              <div className="text-5xl text-white mb-4">{item.icon}</div>
              <h3 className="text-4xl font-bold text-white">
                <CountUp end={item.count} duration={2} separator="," />
              </h3>
              <p className="text-xl text-white">{item.text}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default InformationSection;
