import CourseTitle from "./CourseTitle";
import MediaContent from "../ui/MediaContent";

const HeroSection = ({ title, description, media }) => {
  return (
    <div className="bg-[#0e1e32] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 items-center">
        <CourseTitle title={title} description={description} />
        <div className="rounded-xl overflow-hidden shadow-xl">
          <MediaContent media={media} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
