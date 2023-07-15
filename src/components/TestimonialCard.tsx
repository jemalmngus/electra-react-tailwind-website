import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
  position: string; // Add the position property to the Testimonial interface
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="px-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <FaQuoteLeft className="text-2xl text-gray-500 mr-2" />
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.position}</p> {/* Add the position */}
          </div>
        </div>
        <p className="text-gray-600">
          <span className="text-xl font-bold italic">"{testimonial.quote}"</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
