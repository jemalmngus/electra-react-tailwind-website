// import React from 'react';
// // import React, { useEffect, useState } from 'react';
// const PartnersSection: React.FC = () => {
//   // Dummy data for partners


// //   const [partners, setPartners] = useState([]);

// //   useEffect(() => {
// //     const fetchPartners = async () => {
// //       try {
// //         const response = await fetch('https://api.example.com/partners');
// //         const data = await response.json();
// //         setPartners(data);
// //       } catch (error) {
// //         console.error('Error fetching partners:', error);
// //       }
// //     };

// //     fetchPartners();
// //   }, []);


// // const { data, isLoading, error, fetchData } = useApi();

// //   useEffect(() => {
// //     fetchData(); // Fetch data when the component mounts
// //   }, [fetchData]);

// //   if (isLoading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error.message}</div>;
// //   }
//   return (
//     <section className="bg-gray-100 py-10">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Our Partners and Sponsors</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
//           {partners.map((partner) => (
//             <div key={partner.id} className="flex flex-col items-center">
//               <a href={partner.link} target="_blank" rel="noopener noreferrer">
//                 <img src={partner.logo} alt="Partner Logo" className="h-16 w-16 mb-4" />
//               </a>
//               <p className="text-center">{partner.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnersSection;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PartnersSection: React.FC = () => {
  const partners = [
    {
      id: 1,
      logo: 'https://dummyimage.com/100x100/1a73e8/ffffff&text=Partner+1',
      text: 'Partner 1',
      link: 'https://www.example.com/partner1',
    },
    {
      id: 2,
      logo: 'https://dummyimage.com/100x100/34a853/ffffff&text=Partner+2',
      text: 'Partner 2',
      link: 'https://www.example.com/partner2',
    },
    {
      id: 3,
      logo: 'https://dummyimage.com/100x100/fbbc04/ffffff&text=Partner+3',
      text: 'Partner 3',
      link: 'https://www.example.com/partner3',
    },
    {
      id: 4,
      logo: 'https://dummyimage.com/100x100/4285f4/ffffff&text=Partner+4',
      text: 'Partner 4',
      link: 'https://www.example.com/partner4',
    },
    {
      id: 5,
      logo: 'https://dummyimage.com/100x100/ea4335/ffffff&text=Partner+5',
      text: 'Partner 5',
      link: 'https://www.example.com/partner5',
    },
    // Add more partner objects here
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners and Sponsors</h2>
        <Carousel showThumbs={true} showStatus={false} showIndicators={false} infiniteLoop={true} emulateTouch={true} swipeable={true}>
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <img src={partner.logo} alt={partner.text} className="h-16 w-16 mb-4" />
              </a>
              <p className="text-center">{partner.text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersSection;
