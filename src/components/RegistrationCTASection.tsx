import React from 'react';

const RegistrationCTASection: React.FC = () => {
  return (
    <section className="bg-green-500 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Register Now for E3 Expo 2023</h2>
        <p className="text-white text-lg mx-auto max-w-lg mb-8">
          Don't miss out on the biggest event of the year. Join us at the E3 Expo to explore the latest innovations,
          connect with industry experts, and discover new business opportunities.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-green-500 rounded-full px-8 py-3 font-bold hover:bg-green-400 hover:text-white transition-colors duration-300"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default RegistrationCTASection;
