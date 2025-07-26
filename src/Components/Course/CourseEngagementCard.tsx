import React from "react";

const CourseEngagementCard = ({ data }) => {
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
      className="flex max-w-4xl overflow-hidden rounded-xl bg-cover bg-center font-sans text-white shadow-xl"
      // The background image is dynamic, so it's set with an inline style.
      style={{ backgroundImage: `url(${background.image})` }}
    >
      {/* Left side content */}
      <div className="flex flex-1 flex-col justify-center p-8">
        <div className="mb-4 flex items-center">
          <img src={top_left_icon_img} alt="Icon" className="mr-2 h-8 w-8" />
          <div>
            <span className="text-2xl font-bold text-[#ff9f43]">Free</span>
            <span className="text-2xl font-bold text-white"> PDF</span>
          </div>
        </div>
        <h2
          className="mb-2 text-3xl font-bold"
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
      <div className="hidden flex-shrink-0 md:flex md:w-[300px]">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default CourseEngagementCard;
