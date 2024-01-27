import React from 'react';
import Accordion from './Accordion';



const Faq = () => {
  return (
    <div className="bg-center bg-no-repeat md:bg-cover">
      <div className="mx-4 md:mx-14 mt-20">
        <div className="justify-center px-4 md:px-8 ">
          <h3 className="text-lg mt-8 font-bold">FAQ</h3>
          <h1 className="text-4xl md:text-6xl my-4   font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-dark mb-6 md:mb-12 text-center">
            Frequently Asked Questions About the Wash car  Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="p-4 md:w-3/5 justify-center mx-4 md:mx-60 bg-gray-light shadow-lg rounded-lg">
          
          <Accordion
            title="1. How do I find the wash car  deals?"
            answer="You can find wash car deals by researching online and comparing prices from different wash companies."
          />
          <Accordion
            title="2. How do I find such low rental car prices?"
            answer="Book in advance: Booking your wash car ahead of time can often result in lower prices. Compare prices from multiple companies."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
