import React from 'react';
import { FiDollarSign, FiPackage, FiAward, FiUsers } from 'react-icons/fi';

const ExhibitorPackage = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Exhibitor Package</h2>
      <ul className="text-lg mb-4">
        <li className="flex items-center mb-2">
          <FiPackage className="mr-2 text-green-500" />
          Booth Space: 3m x 3m
        </li>
        <li className="flex items-center mb-2">
          <FiAward className="mr-2 text-green-500" />
          Company Recognition in Event Materials
        </li>
        <li className="flex items-center mb-2">
          <FiUsers className="mr-2 text-green-500" />
          Attendee Passes: 5
        </li>
        <li className="flex items-center mb-2">
          <FiDollarSign className="mr-2 text-green-500" />
          Price: 5000 Birr
        </li>
      </ul>
      <p className="text-gray-600 mb-4">
        Take advantage of our exhibitor package, which includes a 3m x 3m booth space, company recognition in event materials, 5 attendee passes, and all the benefits of showcasing your products and services at E3 Expo 2023. You'll have the opportunity to connect with industry professionals, explore new business opportunities, and raise your company's profile. Secure your spot now and make a lasting impression at the expo!
      </p>
      <p className="text-gray-600">
        As an exhibitor, you'll have the chance to showcase your latest innovations, connect with potential customers and partners, and gain valuable exposure in the electrical, broadcasting, and electromechanical industries. Our exhibitor package provides everything you need to make a successful presence at E3 Expo 2023, including a prime booth space, company recognition, and attendee passes for your team. Don't miss out on this opportunity to network, collaborate, and expand your business horizons.
      </p>
    </div>
  );
};

export default ExhibitorPackage;
