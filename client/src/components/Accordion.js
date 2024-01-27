import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between w-full ${
          accordionOpen ? "bg-orange text-white" : "bg-gray-light"
        } p-2 rounded`}
      >
        <span>{title}</span>
        <svg
          className={`fill-current h-4 w-4 transform origin-center transition duration-200 ${
            accordionOpen && "rotate-180"
          }`}
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 12.586L5.879 8.464a1 1 0 011.414-1.414L10 10.586l3.707-3.708a1 1 0 111.414 1.414L11.414 12l3.707 3.707a1 1 0 01-1.414 1.414L10 14.414l-3.121 3.122a1 1 0 01-1.414-1.414L8.586 12 5.879 8.293a1 1 0 010-1.414 1 1 0 011.414 0L10 12.586z"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? "h-auto py-2" : "h-0 py-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
