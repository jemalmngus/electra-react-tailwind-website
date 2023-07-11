import React from 'react';

const FocusAreasSection: React.FC = () => {
  // Dummy data for focus areas
  const focusAreas = [
    {
      id: 1,
      title: 'Innovation and Future Technologies',
      description: 'Explore the latest innovations and emerging technologies that are shaping the industry.',
    },
    {
      id: 2,
      title: 'Opportunity for Startup Ecosystem',
      description: 'Discover opportunities for startups and entrepreneurs to showcase their ideas and innovations.',
    },
    {
      id: 3,
      title: 'New Business Opportunities',
      description: 'Learn about new business opportunities and partnerships in the industry.',
    },
  ];

  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((focusArea) => (
            <div key={focusArea.id} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{focusArea.title}</h3>
              <p>{focusArea.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
