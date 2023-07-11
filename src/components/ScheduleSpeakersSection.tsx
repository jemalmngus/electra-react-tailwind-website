import React from 'react';

const ScheduleSpeakersSection: React.FC = () => {
  // Dummy data for schedule and speakers
  const scheduleSpeakers = [
    {
      id: 1,
      time: '09:00 AM - 10:00 AM',
      title: 'Keynote Speech',
      speaker: 'John Doe',
      image: 'https://dummyimage.com/400x300/1a73e8/ffffff&text=Speaker+1',
      link: 'https://www.example.com/speaker1',
    },
    {
      id: 2,
      time: '10:30 AM - 11:30 AM',
      title: 'Panel Discussion: Future Technologies',
      speaker: 'Jane Smith',
      image: 'https://dummyimage.com/400x300/34a853/ffffff&text=Speaker+2',
      link: 'https://www.example.com/speaker2',
    },
    {
      id: 3,
      time: '12:00 PM - 01:00 PM',
      title: 'Workshop: Entrepreneurship in the Digital Age',
      speaker: 'Michael Johnson',
      image: 'https://dummyimage.com/400x300/fbbc04/ffffff&text=Speaker+3',
      link: 'https://www.example.com/speaker3',
    },
    // Add more schedule and speaker data here...
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Schedule and Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scheduleSpeakers.map((scheduleSpeaker) => (
            <div key={scheduleSpeaker.id} className="bg-white rounded-lg shadow-md">
              <a href={scheduleSpeaker.link} target="_blank" rel="noopener noreferrer">
                <img src={scheduleSpeaker.image} alt="Speaker" className="w-full h-40 object-cover rounded-t-lg" />
              </a>
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-2">{scheduleSpeaker.time}</p>
                <h3 className="text-xl font-semibold mb-2">{scheduleSpeaker.title}</h3>
                <p className="text-gray-600 mb-4">{scheduleSpeaker.speaker}</p>
                <a
                  href={scheduleSpeaker.link}
                  className="inline-block bg-green-500 text-white rounded-full px-4 py-2 font-bold hover:bg-green-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSpeakersSection;
