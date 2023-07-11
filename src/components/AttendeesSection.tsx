import React from 'react';

const AttendeesSection: React.FC = () => {
  const attendees = [
    { name: 'Government utilities', description: 'Public sector energy organizations' },
    { name: 'Electrical trading companies', description: 'Companies involved in electrical equipment trading' },
    { name: 'Wholesale & Manufacturers', description: 'Wholesalers and manufacturers in the electrical industry' },
    { name: 'Energy sector professionals', description: 'Professionals working in the energy sector' },
    { name: 'Electrical engineers', description: 'Engineers specializing in electrical systems' },
    { name: 'Technology enthusiasts', description: 'Enthusiasts interested in technological advancements' },
    { name: 'Industry researchers', description: 'Researchers exploring innovations in the industry' },
    { name: 'Startups and entrepreneurs', description: 'Startups and entrepreneurs in the energy sector' },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Who should attend?</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {attendees.map((attendee, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 text-center"
            >
              <h3 className="text-lg font-bold mb-2 text-green-600">{attendee.name}</h3>
              <p className="text-gray-800">{attendee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttendeesSection;
