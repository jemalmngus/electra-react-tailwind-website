import React from 'react';

const BusinessHours: React.FC = () => {
  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="bg-gray-200 py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Business Hours</h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Our business operates during the following hours:
        </p>
        <table className="w-full max-w-md mx-auto bg-white border border-gray-300 rounded-lg">
          <tbody>
            {businessHours.map((item, index) => (
              <tr key={item.day}>
                <td className={`py-3 px-4 ${index !== 6 && 'border-b border-gray-300 font-bold'}`}>
                  <span className="text-lg">{item.day}</span>
                </td>
                <td className={`py-3 px-4 ${index !== 6 && 'border-b border-gray-300'}`}>
                  <span className="text-lg">{item.hours}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessHours;
