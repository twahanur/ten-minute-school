/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const CourseEngagementCard = ({ data }:any) => {
  // If no data is provided, render nothing to avoid errors.
  if (!data) {
    return null;
  }

  // Destructure for easier access
  const {
    background,
    cta,
    description,
    thumbnail,
    title,
    title_color,
    description_color,
    top_left_icon_img,
  } = data;

  return (
    <div
      className="flex overflow-hidden rounded-xl bg-cover bg-center font-sans text-white shadow-xl md:px-3 md:py-10 mt-5 md:mt-10"
      style={{ backgroundImage: `url(${background.image})` }}
    >
      {/* Left side content */}
      <div className="flex flex-1 flex-col justify-center p-3 md:p-8">
        <div className="mb-4 flex items-center">
          <Image src={top_left_icon_img} alt="Icon" height={50} width={200} className="mr-2" />
        </div>
        <h2
          className="mb-2 text-xl md:text-3xl font-bold"
          // The title color is dynamic from the data.
          style={{ color: title_color }}
        >
          {title}
        </h2>
        <p
          className="mb-8 leading-relaxed"
          // The description color is also dynamic.
          style={{ color: description_color }}
        >
          {description}
        </p>
        <a
          href={cta.clicked_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-green-500 py-3 px-6 text-center font-bold text-white transition-colors hover:bg-green-600"
        >
          {cta.text}
        </a>
      </div>

      {/* Right side thumbnail - hidden on small screens, visible on medium and up */}
      <div className="hidden flex-shrink-0 md:flex">
        <Image
          width={350}
          height={300}
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default CourseEngagementCard;
