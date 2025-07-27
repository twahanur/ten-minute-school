import Image from "next/image";
import React from "react";

const CourseExclusiveFeature = ({ data }) => {
  if (!data || !Array.isArray(data.values)) return null;
  return (
    <section className="py-12">
      <div className="container mx-auto font-sans">
        {data.name && (
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
            {data.name}
          </h2>
        )}
        <div className="grid grid-cols-1 gap-10 border border-gray-200 rounded-lg md:p-6">
          {data.values.map((feature, idx) => (
            <div
              key={feature.id || idx}
              className="flex flex-col justify-between md:flex-row gap-6 bg-gray-50 p-6  first:border-b-1"
            >
             
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-700">
                  {feature.title}
                </h3>
                <ul className="list-disc leading-loose list-inside text-gray-600 space-y-1">
                  {feature.checklist.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
               <Image
                height={300}
                width={300}
                src={feature.file_url}
                alt={feature.title}
                className=" object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseExclusiveFeature;
