import Image from "next/image";
import React from "react";
const assets = {
  star_full: "https://icon.now.sh/star/ffc107",
};
const CourseTitle = (params) => {
  const { title, description } = params;
  return (
    <div className="w-full bg-blue-700">
      <h1 className="text-3xl lg:text-4xl font-bold mb-3">{title}</h1>
      <div className="flex items-center space-x-2 mb-4 text-yellow-400">
        <span className="font-bold text-lg">4.9</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Image
              width={5}
              height={5}
              key={i}
              src={assets.star_full}
              alt="star"
              className="w-5 h-5"
            />
          ))}
        </div>
        <span className="text-gray-300">(1,500+ Reviews)</span>
      </div>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default CourseTitle;
