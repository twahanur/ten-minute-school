'use client'
import { useState, useEffect } from "react";

// Chevron Icon Component
const ChevronIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 flex-shrink-0 text-gray-500 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export default function CourseDetails({ data }) {
  const [openId, setOpenId] = useState(null);

  // Handle dynamic default open item after data load
  useEffect(() => {
    if (data?.values?.length > 0) {
      setOpenId(data.values[0].id);
    }
  }, [data]);

  // Safe check
  if (!data || !Array.isArray(data.values) || data.values.length === 0) {
    return null;
  }

  const toggleItem = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full bg-white font-sans">
      <h2 className="mb-6 text-left text-xl md:text-3xl font-bold">
        {data.name || "Course Details"}
      </h2>

      <div className="space-y-2 md:p-5 md:border border-gray-200 rounded-lg">
        {data.values.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id} className="border-b border-gray-200 last:border-b-0">
              
              <button
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between py-4 text-left"
              >
                
                <div
                  className="md:text-lg font-semibold text-gray-800"
                  dangerouslySetInnerHTML={{ __html: item.title || "Untitled" }}
                />
                <ChevronIcon isOpen={isOpen} />
              </button>

              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="prose prose-blue max-w-none leading-relaxed md:text-xl p-4 pt-0 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: item.description || "<p>No description provided.</p>",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
