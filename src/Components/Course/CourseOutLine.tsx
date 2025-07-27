import Image from "next/image";
import React from "react";

const CourseOutline = ({ features }) => {
  return (
    <div>
      <h2 className="md:text-2xl font-bold mb-4 py-5">{features.name}</h2>
      <div className="grid md:grid-cols-2 gap-4 bg-zinc-900 text-white rounded-xl">
        {features.values.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center md:items-start gap-4 p-3 md:p-8"
          >
            <Image
              src={feature.icon}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="text-sm">
              <h3 className="font-bold mb-3">{feature.title}</h3>
              <p className="font-normal text-gray-400">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOutline;
