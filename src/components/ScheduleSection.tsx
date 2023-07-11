import React from 'react';
import { FiClock, FiUsers, FiCoffee, FiBriefcase, FiLayers } from 'react-icons/fi';

const ScheduleSection: React.FC = () => {
  const schedule = [
    {
      day: 'Day 1',
      events: [
        { time: '9:00 AM - 10:00 AM', event: 'Registration and Check-in', icon: <FiUsers color="green" size={20} /> },
        { time: '10:00 AM - 11:00 AM', event: 'Opening Ceremony', icon: <FiBriefcase color="green" size={20} /> },
        { time: '11:00 AM - 12:30 PM', event: 'Keynote Speeches', icon: <FiLayers color="green" size={20} /> },
        { time: '12:30 PM - 2:00 PM', event: 'Lunch Break', icon: <FiCoffee color="green" size={20} /> },
        { time: '2:00 PM - 4:00 PM', event: 'Panel Discussions', icon: <FiBriefcase color="green" size={20} /> },
        { time: '4:00 PM - 5:00 PM', event: 'Networking Session', icon: <FiUsers color="green" size={20} /> },
      ],
    },
    {
      day: 'Day 2',
      events: [
        { time: '9:00 AM - 10:00 AM', event: 'Workshops', icon: <FiBriefcase color="green" size={20} /> },
        { time: '10:00 AM - 11:30 AM', event: 'Product Demos', icon: <FiLayers color="green" size={20} /> },
        { time: '11:30 AM - 1:00 PM', event: 'Industry Insights', icon: <FiBriefcase color="green" size={20} /> },
        { time: '1:00 PM - 2:00 PM', event: 'Lunch Break', icon: <FiCoffee color="green" size={20} /> },
        { time: '2:00 PM - 4:00 PM', event: 'Networking Session', icon: <FiUsers color="green" size={20} /> },
        { time: '4:00 PM - 5:30 PM', event: 'Closing Keynote', icon: <FiBriefcase color="green" size={20} /> },
      ],
    },
    // Add more days and events as needed
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Expo Schedule</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {schedule.map((day, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4 text-center">{day.day}</h3>
              {day.events.map((item, eventIndex) => (
                <div
                  key={eventIndex}
                  className="flex items-center justify-between bg-white rounded-lg shadow-md p-4"
                >
                  <div className="flex items-center">
                    <div className="mr-3">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.time}</h4>
                      <p className="text-gray-800">{item.event}</p>
                    </div>
                  </div>
                  <div>
                    {/* Add any additional content here, such as buttons or icons */}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
