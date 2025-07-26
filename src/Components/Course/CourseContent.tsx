"use client";
import { useState } from "react";

 const CourseContent = () => {
    // This is a STATIC placeholder as the detailed curriculum is not in the JSON data.
    const curriculum = {
      Introduction: [
        "Video: IELTS Introduction",
        "Video: Making a Daily Routine",
        "IELTS Vocabulary",
      ],
      "Academic Reading": ["Mock Test 1", "Mock Test 2"],
    };
    const [openSection, setOpenSection] = useState("Introduction");
    return (
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4">কন্টেন্ট লিস্ট</h2>
        {Object.entries(curriculum).map(([sectionTitle, lectures]) => (
          <div key={sectionTitle} className="border-b last:border-b-0">
            <button
              onClick={() =>
                setOpenSection(
                  openSection === sectionTitle ? null : sectionTitle
                )
              }
              className="w-full flex justify-between items-center py-4 font-semibold text-lg text-left"
            >
              <span>{sectionTitle}</span>
              <span
                className={`transform transition-transform ${
                  openSection === sectionTitle ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openSection === sectionTitle && lectures.length > 0 && (
              <ul className="pb-4 pl-4 space-y-3">
                {lectures.map((lecture, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between  "
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5  "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span>{lecture}</span>
                    </div>
                    <button className="text-green-600 font-semibold text-sm">
                      দেখুন
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };
  export default CourseContent;