import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faBolt, faLightbulb, faBroadcastTower, faIndustry } from '@fortawesome/free-solid-svg-icons';

const CategoriesSection: React.FC = () => {
  const categories = [
    { id: 1, title: 'Communication', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: faDesktop },
    { id: 2, title: 'Electromechanical', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: faBolt },
    { id: 3, title: 'Lighting', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: faLightbulb },
    { id: 4, title: 'Broadcasting', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: faBroadcastTower },
    { id: 5, title: 'Industrial and Automation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: faIndustry },
    // Add more categories here
  ];

  return (
    <section className="py-10 bg-gray-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Categories/Sectors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <div key={category.id} className="p-4 bg-white rounded-lg shadow-md">
              <div className="bg-green-500 rounded-full text-white text-4xl w-14 h-14 flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={category.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
