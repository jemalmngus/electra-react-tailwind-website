import React from 'react';
import ExhibitorForm from './ExhibitorForm';

const ExhibitorPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-green-400 py-10">

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-8">Become an <span className='text-red-500'>Exhibitor</span></h2>
            <p className="text-white mb-6">
              Showcase your company and connect with potential customers at our upcoming expo. Register now to secure your
              exhibition stand.
            </p>
            <ul className="list-disc list-inside text-white mb-6">
              <li className="mb-2">Gain exposure to a large audience</li>
              <li className="mb-2">Network with industry professionals</li>
              <li className="mb-2">Promote your products and services</li>
              <li>Generate leads and business opportunities</li>
            </ul>
            <p className="text-white mb-6">
              Don't miss out on this opportunity. Fill out the registration form below and join our growing list of
              exhibitors.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Exhibitor Registration</h3>
              <ExhibitorForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitorPage;
