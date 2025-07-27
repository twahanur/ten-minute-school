"use client";
import React, { useState } from "react";

// Reusable Chevron Icon
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
const CourseFaq = ({ data }) => {
  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  if (!data || !data.values || data.values.length === 0) return null;
  const toggleItem = (id) => {
    if (showAll) return;
    setOpenId(openId === id ? null : id);
  };
  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div className="w-full font-sans">
      <h1 className="mb-6 text-left text-xl md:text-3xl font-bold text-gray-800">
        {data.name}
      </h1>
      <div className="space-y-2 md:border-2 rounded  border-gray-200 md:p-6">
        {data.values.map((item) => {
          const isOpen = showAll || openId === item.id;
          return (
            <div
              key={item.id || item.question}
              className="border-b border-gray-200 border-dashed "
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-start justify-between py-4 text-left"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {item.question}
                </span>
                <ChevronIcon isOpen={isOpen} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="prose prose-blue max-w-none p-4 pt-0 text-gray-600"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {!showAll && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleShowAll}
            className="rounded-full border border-gray-300 bg-gray-50 py-2 px-6 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            সকল প্রশ্ন-উত্তর
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseFaq;
