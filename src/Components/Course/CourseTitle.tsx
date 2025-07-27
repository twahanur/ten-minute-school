/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

// Using an SVG directly as a component for better control, but an <img> tag works too.
const StarIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
      clipRule="evenodd"
    />
  </svg>
);

const CourseHero = ({title, description}:any) => {
  const ratingText = "(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)";
  return (
    <div className="w-full bg-[#100f29] text-white flex items-center min-h-[350px] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>

        {/* Rating Section */}
        <div className="flex flex-col md:flex-row space-y-2 space-x-3 mb-8">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-6 h-6" />
            ))}
          </div>
          <div className="text-base md:text-lg text-gray-200">
            {ratingText}
          </div>
        </div>
      <p className="text-base md:text-xl text-gray-300 leading-relaxed " dangerouslySetInnerHTML={{ __html: description }}/>
      </div>
    </div>
  );
};

export default CourseHero;