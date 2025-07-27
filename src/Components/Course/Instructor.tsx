/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

// A small SVG component for the arrow icon
const ArrowRightIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

interface Instructor {
  name: string;
  image: string;
  description: string;
  short_description: string;
}

const InstructorCard = ({ instructor }: { instructor: Instructor }) => {
  return (
    // Use responsive padding for the main container
    <div className="w-full mx-auto font-sans mt-6 md:p-6">
      {/* Section Title with responsive text size */}
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
        {instructor.short_description}
      </h2>

      {/* Instructor Info Card with responsive padding and gap */}
      <div className="bg-white rounded-xl md:border border-gray-300 p-4 sm:p-6 flex items-center gap-x-4 sm:gap-x-6">
        
        {/* Image with yellow circular background */}
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-yellow-100" />
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={88}
            height={88}
            className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] sm:w-[88px] sm:h-[88px]"
          />
        </div>

        {/* Instructor Details */}
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-1">
            {/* Name with responsive text size */}
            <h3 className="font-bold md:text-lg sm:text-xl text-gray-900">{instructor.name}</h3>
            <ArrowRightIcon className="w-4 h-4 text-gray-700 flex-shrink-0" />
          </div>
          <div
            className="text-gray-600 leading-relaxed text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: instructor.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;