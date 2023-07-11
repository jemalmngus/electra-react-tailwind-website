import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Benefit = {
  icon: IconDefinition;
  title: string;
  description: string;
};

type BenefitsSectionProps = {
  benefits: Benefit[];
};

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Benefits of Exhibiting at E3 Expo</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                <FontAwesomeIcon icon={benefit.icon} className="text-6xl text-green-500 mb-4 hover:text-yellow-500 transition-colors duration-300" />
                <h4 className="text-2xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
