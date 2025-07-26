import React from 'react';

// A simple checkmark icon component. You can replace this with an icon library if you have one.
const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 flex-shrink-0 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CoursePointer = ({ data }) => {
  // If no data or values are provided, don't render the component.
  if (!data || !data.values || data.values.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-5xl rounded-lg bg-white p-8 font-sans shadow-md">
      {/* Section Title */}
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
        {data.name}
      </h2>

      {/* Grid container for the list items */}
      <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
        {data.values.map((item) => (
          // Each list item with an icon and text
          <div key={item.id} className="flex items-start">
            <div className="mt-1">
              <CheckmarkIcon />
            </div>
            <p className="ml-3 text-base leading-relaxed text-gray-700">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePointer;