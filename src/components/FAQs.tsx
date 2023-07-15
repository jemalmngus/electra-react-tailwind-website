import React, { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import useApi from '../hooks/useApi';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const { data: faqData, isLoading, error } = useApi('faq/');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-gray-200 py-10 my-10">
      <div className="container mx-auto cursor-default">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData &&faqData.map((faq: FAQItem, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 cursor-pointer w-3/4 mx-auto"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium flex items-center">
                  <BsQuestionCircle className="mr-2" />
                  <span>{faq.question}</span>
                </h3>
                {activeIndex === index ? (
                  <FiChevronUp className="text-gray-600" />
                ) : (
                  <FiChevronDown className="text-gray-600" />
                )}
              </div>
              {activeIndex === index && <p className="mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
