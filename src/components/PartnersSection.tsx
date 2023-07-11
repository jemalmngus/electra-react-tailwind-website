import React from 'react';
// import React, { useEffect, useState } from 'react';
const PartnersSection: React.FC = () => {
  // Dummy data for partners
  const partners = [
    {
      id: 1,
      logo: 'https://dummyimage.com/100x100/1a73e8/ffffff&text=Partner+1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://www.example.com/partner1',
    },
    {
      id: 2,
      logo: 'https://dummyimage.com/100x100/34a853/ffffff&text=Partner+2',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      link: 'https://www.example.com/partner2',
    },
    {
      id: 3,
      logo: 'https://dummyimage.com/100x100/ff6f00/ffffff&text=Partner+3',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: 'https://www.example.com/partner3',
    },
    {
      id: 4,
      logo: 'https://dummyimage.com/100x100/ea4335/ffffff&text=Partner+4',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'https://www.example.com/partner4',
    },
    {
      id: 5,
      logo: 'https://dummyimage.com/100x100/fbbc04/ffffff&text=Partner+5',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      link: 'https://www.example.com/partner5',
    },
    {
      id: 6,
      logo: 'https://dummyimage.com/100x100/4285f4/ffffff&text=Partner+6',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://www.example.com/partner6',
    },
    {
      id: 7,
      logo: 'https://dummyimage.com/100x100/34a853/ffffff&text=Partner+7',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: 'https://www.example.com/partner7',
    },
    {
      id: 8,
      logo: 'https://dummyimage.com/100x100/ea4335/ffffff&text=Partner+8',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'https://www.example.com/partner8',
    },
    {
      id: 9,
      logo: 'https://dummyimage.com/100x100/fbbc04/ffffff&text=Partner+9',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      link: 'https://www.example.com/partner9',
    },
    {
      id: 10,
      logo: 'https://dummyimage.com/100x100/fbbc04/ffffff&text=Partner+10',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://www.example.com/partner10',
    },
    {
      id: 11,
      logo: 'https://dummyimage.com/100x100/1a73e8/ffffff&text=Partner+11',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: 'https://www.example.com/partner11',
    },
    {
      id: 12,
      logo: 'https://dummyimage.com/100x100/34a853/ffffff&text=Partner+12',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'https://www.example.com/partner12',
    },
    {
      id: 13,
      logo: 'https://dummyimage.com/100x100/ff6f00/ffffff&text=Partner+13',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      link: 'https://www.example.com/partner13',
    },
    {
      id: 14,
      logo: 'https://dummyimage.com/100x100/4285f4/ffffff&text=Partner+14',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://www.example.com/partner14',
    },
    {
      id: 15,
      logo: 'https://dummyimage.com/100x100/fbbc04/ffffff&text=Partner+15',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: 'https://www.example.com/partner15',
    },
  ];


//   const [partners, setPartners] = useState([]);

//   useEffect(() => {
//     const fetchPartners = async () => {
//       try {
//         const response = await fetch('https://api.example.com/partners');
//         const data = await response.json();
//         setPartners(data);
//       } catch (error) {
//         console.error('Error fetching partners:', error);
//       }
//     };

//     fetchPartners();
//   }, []);


// const { data, isLoading, error, fetchData } = useApi();

//   useEffect(() => {
//     fetchData(); // Fetch data when the component mounts
//   }, [fetchData]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners and Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <img src={partner.logo} alt="Partner Logo" className="h-16 w-16 mb-4" />
              </a>
              <p className="text-center">{partner.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
