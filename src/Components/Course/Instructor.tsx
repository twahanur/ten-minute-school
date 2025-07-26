import Image from "next/image";
import React from "react";

const Instructor = ({ instructor }) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-2xl font-bold mb-4">{instructor.name}</h2>
        <div className="flex items-center">
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full mr-6"
          />
          <div>
            <p className="font-bold text-xl">{instructor.name}</p>
            <div
              className="prose prose-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: instructor.description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
