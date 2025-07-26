"use client";
import { useState } from 'react';

// This component displays the sticky navigation tabs
const CourseTab = ({ sections }) => {
  const [activeTab, setActiveTab] = useState(sections[0]?.type || "");

  // In a real app, clicking these would scroll to the corresponding section.
  return (
    <div className="sticky top-[72px] bg-white shadow-md z-20"> {/* Adjust 'top-[72px]' to match your main header's height */}
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
          <button className="text-gray-400 p-4">{"<"}</button>
          {sections.map(section => (
            <a
              key={section.type}
              href={`#${section.type}`} // Example link
              onClick={() => setActiveTab(section.type)}
              className={`py-4 px-2 font-semibold border-b-2 transition-colors duration-200 ${
                activeTab === section.type
                  ? 'border-green-500 text-green-500'
                  : 'border-transparent text-gray-600 hover:text-green-500'
              }`}
            >
              {section.name}
            </a>
          ))}
          <button className="text-gray-400 p-4">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default CourseTab;